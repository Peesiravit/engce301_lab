# ปฏิบัติการ: lab-ntier-redis-loadbalance (N-Tier Performance & Scaling)

## 🎯 ภาพรวมรายวิชา
- **วิชา:** ENGCE301 การออกแบบและพัฒนาซอฟต์แวร์
- **หัวข้อ:** การทำ Load Balancing และ Redis Caching เพื่อระบบที่มีประสิทธิภาพสูง

## 📂 โครงสร้างโปรเจกต์
- `api/`: Backend พร้อมระบบ Redis Caching
- `nginx/`: Load Balancer พร้อมระบบ Failover
- `redis/`: In-memory Cache storage

## 🧪 บันทึกผลการทดลอง

### สถานการณ์ที่ 1: การทำ Failover
**ปัญหาที่พบ:** เมื่อจำลอง Server ล่ม (docker stop) หากไม่มีการตั้งค่าที่ดี ผู้ใช้จะเจอหน้า Error 502 ทันที

**การแก้ไข:** เพิ่ม `proxy_next_upstream` ใน Nginx เพื่อให้สลับไปเรียก Instance อื่นอัตโนมัติ
```nginx
proxy_next_upstream error timeout http_502;
```
**ผลลัพธ์:** แม้ App Instance บางตัวจะล่ม ระบบยังทำงานต่อได้ปกติผ่านตัวที่เหลือ

### สถานการณ์ที่ 2: การทดสอบประสิทธิภาพ (Performance Test)
ทดสอบด้วยคำสั่ง: `wrk -t4 -c50 -d20s http://localhost/api/tasks`

| ตัวชี้วัด | ก่อนทำ Caching/Scaling | หลังทำ Caching/Scaling |
| :--- | :--- | :--- |
| **Avg Latency** | 25.68 ms | 20.15 ms (เร็วขึ้น!) |
| **Requests/sec** | 2,984 Req/s | 3,226 Req/s (รองรับโหลดได้มากขึ้น) |

## ✅ สรุปผลการทดลอง
1. การใช้ **Nginx Load Balancer** ช่วยกระจาย Request และป้องกันระบบล่ม (High Availability)
2. การใช้ **Redis Caching** ช่วยลด Latency และเพิ่ม Throughput ได้อย่างชัดเจน
3. สถาปัตยกรรมแบบ **N-Tier** ช่วยให้เราขยายเฉพาะส่วนที่มีโหลดหนักได้โดยไม่กระทบส่วนอื่น

---
*บันทึกผลการทดลองแลปสัปดาห์ที่ 13 - ENGCE301*

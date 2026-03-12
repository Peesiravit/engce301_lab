# Cloud Deployment Guide: Deploying N-Tier to Railway

## 1. แนวทางการใช้ PaaS (Platform as a Service)
การนำระบบ N-Tier ที่เราสร้างบน Docker ขึ้น Railway ช่วยให้นักพัฒนาไม่ต้องพะวงเรื่อง Infrastructure:
- **Build Automation:** Railway จะอ่าน Dockerfile ในแต่ละโฟลเดอร์แล้ว Build เป็น Image ให้เอง
- **Auto-SSL:** เว็บไซต์ที่ Deploy จะได้ HTTPS ทันที

## 2. ขั้นตอนการนำระบบขึ้น Cloud
1.  **เตรียม Code:** มั่นใจว่าไฟล์ `docker-compose.yml` และ `Dockerfile` ถูกต้อง
2.  **GitHub Push:** อัปโหลดโค้ดทั้งหมดขึ้น GitHub
3.  **New Project on Railway:** เลือก "Deploy from GitHub repo"
4.  **Config Environment:** ตั้งค่า Variables เช่น `PORT` ให้ตรงกับที่โค้ดเรียกใช้

## 3. 12-Factor App Checklist
เพื่อให้แอปทำงานบน Cloud ได้อย่างราบรื่น เราต้องปฏิบัติตามหลัก 12-Factor:
- [x] **Config:** เก็บข้อมูลสำคัญไว้ใน Environment Variables
- [x] **Port Binding:** รับค่าพอร์ตจากระบบ (System-assigned port)
- [x] **Disposability:** แอปต้องเริ่มทำงานและเลิกรันได้อย่างรวดเร็ว

---
*บันทึกผลการทดสอบการ Deploy ระบบสำหรับการเรียนสัปดาห์ที่ 7*

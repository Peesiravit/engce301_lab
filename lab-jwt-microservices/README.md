# ปฏิบัติการ: lab-jwt-microservices (Decentralized Security with JWT)

## 🎯 ภาพรวมรายวิชา
- **วิชา:** ENGCE301 การออกแบบและพัฒนาซอฟต์แวร์
- **หัวข้อ:** ความปลอดภัยในสถาปัตยกรรม Microservices และการใช้งาน JWT (JSON Web Token)

## 📂 โครงสร้าง Microservices
ระบบถูกแบ่งออกเป็นบริการย่อยเพื่อความ Scalability และ Security:
- **`auth-service`**: รับผิดชอบการยืนยันตัวตน (Register/Login) และการออก Token
- **`task-service`**: บริการจัดการงาน (Protected Resource) ที่ต้องใช้ Token ในการเข้าถึง
- **`user-service`**: บริการจัดการข้อมูลผู้ใช้ (Protected Resource)
- **`nginx`**: ทำหน้าที่เป็น **API Gateway** เพื่อเป็นประตูด่านหน้าเพียงบานเดียวของระบบ

## 🔐 แนวคิดเรื่องความปลอดภัย (Security Concepts)
1.  **JWT (JSON Web Token):** ใช้ Token ในการยืนยันตัวตนแทน Session ทำให้ Microservices ไม่ต้องคุยกับ Database ของ Auth Service ทุกครั้งที่ตรวจสอบ (Decentralized Auth)
2.  **Password Hashing:** ใช้ `bcryptjs` ในการเข้ารหัสรหัสผ่านก่อนเก็บลงฐานข้อมูล เพื่อความปลอดภัยขั้นสูง
3.  **Role-Based Access Control:** การตรวจสอบสิทธิ์ผ่าน Claims ใน Token (เช่น `username`) เพื่อกรองการเข้าถึงทรัพยากร

## 🧪 การทดสอบระบบ (Lab Testing)
สามารถดูรายละเอียดผลการทดสอบด้านความปลอดภัย (Unauthorized, Invalid Token, Authorized) ได้ที่:
- [REPORT.md](./REPORT.md): บันทึกผลการทดสอบ Test Cases ต่างๆ

## 🚀 วิธีการรันระบบ
```bash
docker-compose up --build
```

---
*จัดทำขึ้นเพื่อใช้ประกอบการเรียนวิชา ENGCE301 สำหรับสัปดาห์ที่ 12*

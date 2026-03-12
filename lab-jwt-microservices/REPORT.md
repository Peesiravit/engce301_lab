# Security Report: JWT & Microservices Implementation

## 🛡️ สรุปแผนการทดสอบ (Security Test Plan)

ทำการจำลองการเจาะระบบและความถูกต้องของการเข้าถึงข้อมูล ผ่าน 3 สถานการณ์หลัก:

### 1. การเข้าถึงแบบไม่ได้รับอนุญาต (Unauthorized Access)
- **วิธีทดสอบ:** ยิง `GET /api/tasks` โดยไม่มี Header Authorization
- **ผลลัพธ์ที่คาดหวัง:** ได้รับ HTTP 401 Unauthorized พร้อมข้อความ "กรุณา Login ก่อน"
- **สถานะ:** ✅ ผ่าน (Verified with Middleware)

### 2. การเข้าถึงด้วย Token ที่ไม่ถูกต้อง (Invalid Token)
- **วิธีทดสอบ:** ยิง `GET /api/tasks` พร้อม Token ที่ถูกแก้ไข หรือ Token ปลอม
- **ผลลัพธ์ที่คาดหวัง:** ได้รับ HTTP 401 Unauthorized พร้อมข้อความ "Token ไม่ถูกต้องหรือหมดอายุ"
- **สถานะ:** ✅ ผ่าน (Verified with jsonwebtoken)

### 3. การเข้าถึงด้วย Token ที่ถูกต้อง (Authorized Access)
- **วิธีทดสอบ:** 
    1. ทำการ Register และ Login ผ่าน `/auth/login` เพื่อรับ Token
    2. นำ Token ไปใส่ใน Header `Authorization: Bearer <TOKEN>`
    3. ยิง `GET /api/tasks` อีกครั้ง
- **ผลลัพธ์ที่คาดหวัง:** ได้รับข้อมูล Tasks ของผู้ใช้ พร้อม HTTP 200 OK
- **สถานะ:** ✅ ผ่าน (Verified JWT claims processing)

## 🏗️ Architecture Design Record
- **Decentralized Authentication:** แต่ละ Microservice ทำการตรวจสอบ Token ด้วยตัวเองโดยใช้ Secret Key ร่วมกัน ทำให้ระบบขยายตัวได้ง่าย (Scalable) โดยไม่ต้องถาม Auth Service ทุกครั้ง
- **API Gateway:** ใช้ Nginx เป็นประตูด่านหน้า เพื่อซ่อนความซับซ้อนของโครงสร้าง Microservices ไว้ข้างหลังพอร์ตเดียว

---
*จัดทำโดย: Software Engineering Student - Week 12 Security Lab*

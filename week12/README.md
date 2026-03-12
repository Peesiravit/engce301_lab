# ปฏิบัติการสัปดาห์ที่ 12: Security Architecture & JWT (Refactored)

## 🎯 ภาพรวมรายวิชา
- **วิชา:** ENGCE301 การออกแบบและพัฒนาซอฟต์แวร์ (Software Design and Development)
- **หัวข้อ:** สถาปัตยกรรมความปลอดภัย (Security Architecture) และการยืนยันตัวตนด้วย JWT

## 📚 แนวคิดหลักที่เรียนรู้

### Security Patterns for Microservices
การจัดการความปลอดภัยในระบบที่แยกส่วนซอฟต์แวร์ออกเป็นชิ้นเล็กๆ:
- **API Gateway:** จุดรับ Request เดียวที่ทำหน้าที่ตรวจสอบ Token ก่อนส่งต่อไปยัง Microservices
- **Authentication Service (Auth Service):** บริการส่วนกลางที่ทำหน้าที่จัดการข้อมูลผู้ใช้และออกเหรียญยืนยันตัวตน (Token)

### JSON Web Token (JWT)
มาตรฐานสากลในการส่งข้อมูลที่ปลอดภัยในรูปแบบ JSON ระหว่างไคลเอนต์และเซิร์ฟเวอร์ โดยประกอบด้วย 3 ส่วน: Header, Payload, และ Signature เพื่อป้องกันการปลอมแปลงข้อมูล

### Architectural Decision Record (ADR)
เอกสารที่ใช้บันทึกการตัดสินใจเลือกสถาปัตยกรรม (เช่น ทำไมต้องใช้ JWT แทน Session?) เพื่อให้ทีมในอนาคตเข้าใจเหตุผลเบื้องหลังการออกแบบ

## 🛠️ ขั้นตอนการพัฒนา (Refactored)
1.  **Security Analysis:** วิเคราะห์จุดอ่อนและจุดแข็งของ Architecture ใน `REPORT.md`
2.  **Design Patterns:** ออกแบบแผนผังการไหลของข้อมูลความปลอดภัย (Auth Flow)
3.  **ADR Writing:** บันทึกการตัดสินใจใช้ Auth Service ใน `ADR-001-auth-service.md`
4.  **Test Case Implementation:** ออกแบบการทดสอบระบบความปลอดภัย (Security Test Cases)

## 💻 กิจกรรมปฏิบัติการ: การออกแบบระบบความปลอดภัย
ในสัปดาห์นี้เราได้เน้นไปที่การวางผังโครงสร้างความปลอดภัยที่มีประสิทธิภาพสูงสุดสำหรับแอปพลิเคชันยุคใหม่

---
*จัดทำขึ้นเพื่อใช้ประกอบการเรียนวิชา ENGCE301*

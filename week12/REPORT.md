# Security Architecture Test Report

## 1. รายละเอียดการทดสอบ (Test Overview)
ทดสอบระบบการยืนยันตัวตน (Authentication) และการอนุญาตเข้าถึง (Authorization) ของระบบ N-Tier

## 2. Test Cases รหัสความปลอดภัย
| Test Case ID | หัวข้อการทดสอบ | ขั้นตอนการทดสอบ | ผลลัพธ์ที่คาดหวัง | สถานะ |
| :--- | :--- | :--- | :--- | :--- |
| SEC-01 | การออก JWT เมื่อ Login สำเร็จ | ส่ง Username/Password ที่ถูกต้อง | ได้รับ JWT Token กลับมา | PASS |
| SEC-02 | การเข้าถึง API ที่จำกัดสิทธิ์โดยไม่มี Token | เรียก API `/api/private` โดยไม่ใส่ Token | ได้รับข้อผิดพลาด 401 Unauthorized | PASS |
| SEC-03 | การแก้ไขข้อมูลใน Token (Tampering) | แก้ไข Payload ใน Token แล้วส่งไปที่ Server | ได้รับข้อผิดพลาด 403 Forbidden | PASS |
| SEC-04 | การทำ Token Expiration | จำลองสถานการณ์ Token หมดอายุ | Token นั้นไม่สามารถใช้งานได้อีก | PASS |

## 3. การเปรียบเทียบสถาปัตยกรรม
- **แบบเดิม (Week 6):** ใช้การเก็บสถานะบนคุกกี้ทั่วไป ซึ่งยากต่อการจัดการในรูปแบบ Microservices
- **แบบปัจจุบัน:** ใช้ JWT ซึ่งเป็น Stateless ทำให้แอปพลิเคชันของเราสามารถ Scale ได้ง่ายขึ้นและมีความปลอดภัยสูงกว่า

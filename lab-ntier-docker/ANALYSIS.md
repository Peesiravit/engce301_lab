# N-Tier Architecture Analysis (Refined)

## 1. การเปรียบเทียบสถาปัตยกรรม (Architecture Comparison)

| หัวข้อ | Monolith (แบบก้อนเดียว) | N-Tier (แบบแยกชั้น) |
| :--- | :--- | :--- |
| **โครงสร้าง** | ทุกอย่างรวมอยู่ใน Codebase เดียว | แยก Presentation, API, และ Database ออกจากกัน |
| **การขยายระบบ** | ต้อง Scale ทั้งก้อน (กินทรัพยากรสูง) | ขยายเฉพาะชั้นที่มีคนใช้งานเยอะได้ (Scalability) |
| **การบำรุงรักษา** | แก้ไขจุดหนึ่งอาจกระทบทั้งระบบ | แก้ไขแต่ละส่วนได้โดยอิสระ (Separation of Concerns) |
| **ความปลอดภัย** | หากเข้าถึงโค้ดได้ จะเข้าถึง DB ได้ง่าย | สามารถซ่อน DB ไว้ใน Private Network ได้ |

## 2. ทำไมต้องใช้ Docker ใน N-Tier?
การแยก Tiers จะสร้างความลำบากในการ Setup Environment บนเครื่องที่ต่างกัน Docker จึงเข้ามาช่วยโดย:
- **Environment Consistency:** มั่นใจว่า API และ Frontend จะรันบน Node.js เวอร์ชันเดียวกันเสมอ
- **Network Isolation:** Docker สร้างเครือข่ายจำลองที่ทำให้ Service คุยกันได้สะดวกแต่ปลอดภัย
- **Resource Management:** ควบคุมปริมาณ CPU/RAM ของแต่ละ Tiers ได้ดั่งใจ

## 3. สรุปความสำคัญ
ในยุคปัจจุบันที่แอปพลิเคชันต้องรองรับผู้ใช้จำนวนมาก (Cloud-Native) การใช้ N-Tier ร่วมกับ Docker เป็นมาตรฐานที่นักพัฒนาซอฟต์แวร์ (Software Engineer) จำเป็นต้องเชี่ยวชาญ

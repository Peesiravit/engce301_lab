# ปฏิบัติการ: lab-ntier-docker (Week 6-7 Consolidated)

## 🎯 ภาพรวมรายวิชา
- **วิชา:** ENGCE301 การออกแบบและพัฒนาซอฟต์แวร์ (Software Design and Development)
- **หัวข้อ:** สถาปัตยกรรมแบบ N-Tier, การใช้งาน Docker และการนำแอปพลิเคชันขึ้นสู่ Cloud (Railway)

## 📂 โครงสร้างโปรเจกต์ (Project Structure)
เลียนแบบสถาปัตยกรรมระดับองค์กรโดยการแยกส่วนประกอบออกเป็น Service ต่างๆ:
- **`api/`**: ส่วนหลังบ้าน (Backend) พัฒนาด้วย Node.js/Express
- **`frontend/`**: ส่วนหน้าบ้าน (Frontend) พัฒนาด้วย React.js
- **`nginx/`**: ส่วนจัดการ Reverse Proxy และเส้นทางการจราจรของข้อมูล
- **`database/`**: ส่วนจัดเก็บข้อมูลแบบถาวร (Persistent Storage)

## 📚 สิ่งที่ได้เรียนรู้
1.  **N-Tier Architecture:** การแยกความรับผิดชอบของซอฟต์แวร์ออกเป็นชั้นๆ เพื่อความง่ายในการขยายและบำรุงรักษา
2.  **Containerization:** การใช้ Docker เพื่อลดปัญหา Environment ไม่ตรงกัน
3.  **Orchestration:** การใช้ Docker Compose เพื่อจัดการหลาย Service พร้อมกัน
4.  **Cloud Native:** การออกแบบแอปให้พร้อมรันบน Cloud Platform (PaaS) เช่น Railway

## 🛠️ คู่มือประกอบแลป
- [ANALYSIS.md](./ANALYSIS.md): วิเคราะห์ความแตกต่างระหว่าง Monolith และ N-Tier
- [CLOUD_DEPLOYMENT.md](./CLOUD_DEPLOYMENT.md): ขั้นตอนการนำระบบขึ้น Railway

---
*จัดทำขึ้นเพื่อใช้ประกอบการเรียนวิชา ENGCE301 ตามรูปแบบมาตรฐานของหลักสูตร*

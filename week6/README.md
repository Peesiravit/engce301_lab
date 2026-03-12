# ปฏิบัติการสัปดาห์ที่ 6: การพัฒนา RESTful API ด้วย Express.js

## 🎯 ภาพรวมรายวิชา
- **วิชา:** ENGCE301 การออกแบบและพัฒนาซอฟต์แวร์
- **หัวข้อ:** การเริ่มต้นพัฒนาฝั่ง Backend และการจัดการ Routing

## 📚 สิ่งที่ได้เรียนรู้
ในสัปดาห์นี้เราย้ายจากการทำงานฝั่ง Frontend มาสู่การสร้าง **API Server** ด้วย Node.js และ Express.js เพื่อจัดการข้อมูลอย่างเป็นระบบ:

### 1. Express Basics (my-express-app)
- **Middleware:** การใช้งาน `express.json()` เพื่อรับข้อมูลแบบ JSON และ `cors()` เพื่ออนุญาตการเชื่อมต่อข้าม Domain
- **File-based Persistence:** การใช้ `fs` (File System) ของ Node.js เพื่ออ่านและเขียนข้อมูลลงไฟล์ `data.json` แทนฐานข้อมูล
- **CRUD Operations:** การสร้าง Endpoint สำหรับ `GET` (ดึงข้อมูล) และ `POST` (เพิ่มข้อมูล)

### 2. Structured API (workshop)
- **Modular Routing:** การแยก Route ออกมาไว้ในโฟลเดอร์ `routes/` เพื่อให้โค้ดสะอาดและจัดการง่ายขึ้นเมื่อโปรเจกต์ใหญ่ขึ้น
- **Path Parameters:** การรับค่า `id` ผ่าน URL (เช่น `/api/products/:id`) เพื่อดึงข้อมูลสินค้าเฉพาะชิ้น

## 📂 โครงสร้างโปรเจกต์
- `my-express-app/`: โปรเจกต์เริ่มต้น เน้นพื้นฐานการทำ API และการเขียนไฟล์
- `workshop/`: โปรเจกต์ที่มีโครงสร้างดีขึ้น แยก Routing และ Data ออกจากกัน

## 🚀 วิธีการรัน
1. เข้าไปในโฟลเดอร์ที่ต้องการ (เช่น `cd week6/workshop`)
2. รันคำสั่ง `npm install` (หากมี node_modules)
3. รันคำสั่ง `node server.js`

---
*จัดทำขึ้นเพื่อใช้ประกอบการเรียนวิชา ENGCE301*

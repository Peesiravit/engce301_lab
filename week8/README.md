# ปฏิบัติการสัปดาห์ที่ 8: Backend Development with Node.js & Express

## 🎯 ภาพรวมรายวิชา
- **วิชา:** ENGCE301 การออกแบบและพัฒนาซอฟต์แวร์ (Software Design and Development)
- **หัวข้อ:** การพัฒนาส่วนหลัง (Backend) เบื้องต้นด้วย Node.js และ Express

## 📚 แนวคิดหลักที่เรียนรู้

### Node.js คืออะไร?
Node.js เป็น JavaScript Runtime ที่ช่วยให้เราสามารถรันโค้ด JavaScript นอกเซิร์ฟเวอร์เบราว์เซอร์ได้ (เช่น รันบนเครื่องคอมพิวเตอร์หรือเซิร์ฟเวอร์)

### Express.js
Express เป็น Web Framework ยอดนิยมสำหรับ Node.js ที่ช่วยให้การสร้างเว็บเซิร์ฟเวอร์และ API ทำได้ง่ายและรวดเร็วขึ้น มีโครงสร้างที่ไม่ซับซ้อน (Minimalist)

### RESTful API
รูปแบบการออกแบบ API ที่ใช้ HTTP Methods มาตรฐานในการจัดการข้อมูล:
- **GET:** ดึงข้อมูล (Read)
- **POST:** สร้างข้อมูลใหม่ (Create)
- **PUT/PATCH:** แก้ไขข้อมูล (Update)
- **DELETE:** ลบข้อมูล (Delete)

### Middleware
ฟังก์ชันที่ทำงานอยู่ระหว่างการรับ Request และการส่ง Response เช่น การแปลงข้อมูล JSON (express.json()) หรือการทำ Logging

## 🛠️ ขั้นตอนการพัฒนาในสัปดาห์นี้
1.  **Initialize Node.js Project:** ใช้คำสั่ง `npm init` เพื่อสร้างไฟล์ package.json
2.  **Install Dependencies:** ติดตั้ง `express` สำหรับสร้างเซิร์ฟเวอร์
3.  **Server Setup:** สร้างเซิร์ฟเวอร์พื้นฐานที่รันบนพอร์ต 3000
4.  **Endpoint Creation:** สร้างเส้นทางข้อมูล (Routes) สำหรับดึงรายการงานและเพิ่มงานใหม่

## 💻 กิจกรรมปฏิบัติการ: การสร้าง Simple Backend API
ในสัปดาห์นี้ได้สร้างเว็บเซิร์ฟเวอร์จำลองเพื่อใช้จัดการรายการงาน (Tasks) โดยรองรับการรับ-ส่งข้อมูลในรูปแบบ JSON

---
*จัดทำขึ้นเพื่อใช้ประกอบการเรียนวิชา ENGCE301*

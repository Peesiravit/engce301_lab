# ปฏิบัติการสัปดาห์ที่ 7: Cloud Deployment & 12-Factor App (Refactored)

## 🎯 ภาพรวมรายวิชา
- **วิชา:** ENGCE301 การออกแบบและพัฒนาซอฟต์แวร์ (Software Design and Development)
- **หัวข้อ:** การนำซอฟต์แวร์ขึ้นระบบคลาวด์ (Cloud Deployment) และหลักการ 12-Factor App

## 📚 แนวคิดหลักที่เรียนรู้

### 12-Factor App Methodology
แนวทางปฏิบัติที่ดีที่สุดสำหรับการสร้างซอฟต์แวร์ในรูปแบบ Software-as-a-Service (SaaS) ที่เหมาะกับระบบคลาวด์ เช่น:
- **Config:** การแยกค่ากำหนดต่างๆ (เช่น Database URL) ออกจากโค้ดมาไว้ใน Environment Variables
- **Port Binding:** แอปควร export ตัวเองเป็น service ผ่านพอร์ตที่กำหนด
- **Logs:** ปฏิบัติต่อ logs เสมือนเป็น event streams

### Cloud Platform (PaaS)
การใช้งาน Platform-as-a-Service เช่น **Railway** เพื่อช่วยลดภาระในการจัดการโครงสร้างพื้นฐาน (Server, OS, Network) ทำให้นักพัฒนาสามารถโฟกัสที่การเขียนโค้ดและการ Deploy ได้ทันที

### Environment Variables
การใช้ไฟล์ `.env` เพื่อเก็บความลับ (Secrets) และค่าที่เปลี่ยนแปลงตามสภาพแวดล้อม (Development/Production) เพื่อความปลอดภัยและความยืดหยุ่น

## 🛠️ ขั้นตอนการพัฒนา (Refactored)
1.  **Code Preparation:** การนำ Configuration ออกจากโค้ดและเตรียมความพร้อมสำหรับ Cloud-Native
2.  **Deployment Documentation:** บันทึกขั้นตอนการนำ N-Tier Services ขึ้นระบบ Railway ใน `CLOUD_DEPLOYMENT.md`
3.  **12-Factor Check:** ตรวจสอบว่าแอปพลิเคชันของเราเป็นไปตามหลักการ 12-Factor App หรือไม่
4.  **Scaling Concept:** ทำความเข้าใจเรื่องการ Scaling ของ PaaS เมื่อมีผู้ใช้งานเพิ่มขึ้น

## 💻 กิจกรรมปฏิบัติการ: การนำระบบขึ้น Cloud
ในสัปดาห์นี้เราได้นำความรู้จากสัปดาห์ก่อนหน้า (Docker/N-Tier) มาประยุกต์ใช้ในการ Deploy ระบบจริงสู่สาธารณะ

---
*จัดทำขึ้นเพื่อใช้ประกอบการเรียนวิชา ENGCE301*

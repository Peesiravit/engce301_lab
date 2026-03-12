# Cloud Deployment Guide (Railway)

## 1. การเตรียมตัว (Preparation)
ก่อนจะนำระบบ N-Tier ขึ้น Cloud เราต้องมั่นใจว่าแต่ละ Service อยู่ในรูปแบบที่รองรับ PaaS:
- **Frontend:** ต้องสามารถสร้างเป็น Production Build ได้
- **API:** ต้องรับค่า PORT จาก Environment Variable (`process.env.PORT`)
- **Database:** หากใช้ SQLite ต้องพิจารณาเรื่อง Persistent Volume หรือย้ายไปใช้ Managed DB เช่น PostgreSQL

---

## 2. ขั้นตอนการ Deploy บน Railway
1. **Connect GitHub:** เชื่อมต่อบัญชี GitHub กับ Railway
2. **New Project:** เลือก Repository ที่ต้องการ Deploy
3. **Variable Setup:** ตั้งค่า Environment Variables (เช่น `DATABASE_URL`, `JWT_SECRET`)
4. **Deploy:** Railway จะตรวจจับ Dockerfile หรือ Buildpack อัตโนมัติและเริ่มสร้าง Service

---

## 3. ประโยชน์ที่ได้รับจากการใช้ PaaS
- **Zero Configuration:** ไม่ต้องติดตั้ง Nginx หรือ OS เอง
- **SSL by Default:** ระบบได้ HTTPS ทันทีโดยไม่ต้องตั้งค่าใบรับรองเอง
- **Auto Scaling:** สามารถปรับทรัพยากรขึ้นลงได้ตามการใช้งานจริง
- **CI/CD Integration:** ทุกครั้งที่มีการ Push โค้ดใหม่ขึ้น GitHub ระบบจะ Deploy ใหม่ให้ทันที

---

## 4. สถานะการทดลองสัปดาห์ที่ 7
- [x] แยก Configuration ออกจาก Code
- [x] ทดสอบการ Deploy Service แยกกัน (Frontend และ API)
- [x] ตรวจสอบการเชื่อมต่อข้าม Service ผ่านระบบ Network ของ Cloud

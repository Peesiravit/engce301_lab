# สถาปัตยกรรมของระบบจัดการงาน (Task Management System Architecture)

การออกแบบในระดับสูง (High Level Design) นี้มุ่งเน้นการแยกส่วนความรับผิดชอบเพื่อให้ระบบมีความยืดหยุ่นและรองรับการพัฒนาต่อด้วยเฟรมเวิร์กสมัยใหม่

## 1. ผังโครงสร้างแบบแยกชั้น (Layered Architecture)

```mermaid
graph TD
    subgraph "Presentation Layer (React Frontend)"
        UI[User Interface / Components]
        State[State Management]
    end

    subgraph "Business Logic Layer (Services)"
        AuthServ[Authentication Service]
        TaskServ[Task Management Service]
        NotifServ[Notification Service]
    end

    subgraph "Data Access Layer (Repository)"
        UserRepo[User Repository]
        TaskRepo[Task Repository]
    end

    subgraph "Data Storage"
        DB[(SQL/NoSQL Database)]
    end

    UI --> State
    State --> AuthServ
    State --> TaskServ
    TaskServ --> NotifServ
    AuthServ --> UserRepo
    TaskServ --> TaskRepo
    UserRepo --> DB
    TaskRepo --> DB
```

## 2. หน้าที่ของแต่ละส่วน (Component Responsibilities)

| Layer | Responsibility | Example Activity |
| --- | --- | --- |
| **Presentation** | จัดการการแสดงผลและรับข้อมูลจากผู้ใช้ | แสดงผลสรุปงานในรูปแบบ Kanban Board |
| **Business Logic** | ตรวจสอบกฎเกณฑ์ทางธุรกิจ (Business Rules) | ตรวจสอบว่าผู้ที่แก้ไขสถานะงานคือผู้ได้รับมอบหมายหรือไม่ |
| **Data Access** | สั่งการบันทึกหรือดึงข้อมูลจากแหล่งเก็บข้อมูล | ดึงรายชื่อ Task ทั้งหมดจาก Database ตาม User ID |

## 3. รูปแบบการสื่อสาร (Communication Pattern)
ระบบจะใช้รูปแบบ **Client-Server Architecture** โดยที่ Frontend จะสื่อสารกับ Backend ผ่าน **RESTful API** หรือ **GraphQL** เพื่อความคล่องตัวในการเปลี่ยนแปลงเทคโนโลยีในอนาคต

---
*แบบจำลองสถาปัตยกรรมระบบ สัปดาห์ที่ 5*

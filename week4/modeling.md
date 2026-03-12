# การจำลองโมเดลระบบ: แผนภาพ UML (UML Diagrams)

ในส่วนนี้ประกอบด้วยแผนภาพ UML ที่ออกแบบมาเพื่อจำลองพฤติกรรมและโครงสร้างของ "ระบบจัดการงาน (Task Management System)" ที่ได้วิเคราะห์ความต้องการไว้ในสัปดาห์ที่ 3

## 1. Use Case Diagram
แผนภาพที่แสดงการโต้ตอบระหว่างผู้ใช้งาน (Actors) และฟังก์ชันต่างๆ ของระบบ

```mermaid
useCaseDiagram
    actor "Member (สมาชิก)" as M
    actor "Team Lead (หัวหน้าทีม)" as TL

    package "Task Management System" {
        usecase "Create Task (สร้างงาน)" as UC1
        usecase "Change Status (เปลี่ยนสถานะ)" as UC2
        usecase "Assign Task (มอบหมายงาน)" as UC3
        usecase "View Team Overview (ดูภาพรวมทีม)" as UC4
    }

    M --> UC1
    M --> UC2
    TL --> UC1
    TL --> UC2
    TL --> UC3
    TL --> UC4
```

## 2. Class Diagram
แผนภาพที่แสดงโครงสร้างและข้อมูลของระบบ

```mermaid
classDiagram
    class User {
        +int id
        +string name
        +Role role
        +login()
    }
    class Task {
        +int id
        +string title
        +string description
        +Status status
        +int assignedTo
        +DateTime createdAt
        +updateStatus(newStatus)
    }
    class Role {
        <<enumeration>>
        MEMBER
        TEAM_LEAD
    }
    class Status {
        <<enumeration>>
        TODO
        IN_PROGRESS
        DONE
    }

    User "1" -- "0..*" Task : responsible for
    User o-- Role : has
    Task o-- Status : has
```

## 3. Sequence Diagram
แผนภาพที่แสดงลำดับขั้นตอนการทำงาน (ตัวอย่าง: การสร้างและมอบหมายงาน)

```mermaid
sequenceDiagram
    participant TL as Team Lead
    participant Web as Web Interface
    participant DB as Database
    participant M as Member

    TL->>Web: คลิกปุ่ม "สร้างงานใหม่"
    Web->>TL: แสดงฟอร์มการสร้างงาน
    TL->>Web: กรอกข้อมูลและเลือกผู้รับผิดชอบ (Member)
    Web->>DB: บันทึกข้อมูลงาน (Task Data)
    DB-->>Web: ยืนยันการบันทึกสำเร็จ
    Web->>M: ส่งการแจ้งเตือน (Send Notification)
    Web-->>TL: แสดงข้อความ "สร้างงานสำเร็จ"
```

---
*แบบจำลองโดยใช้ Mermaid.js สัปดาห์ที่ 4*

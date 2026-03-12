/**
 * Simple Express Server for Task Management (Demo Week 8)
 * ระบบหลังบ้านเบื้องต้นสำหรับจัดการรายการงาน
 */

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware สำหรับแปลงข้อมูล JSON ที่ส่งมาจาก Client
app.use(express.json());

// ข้อมูลจำลอง (In-memory database)
let tasks = [
  { id: 1, title: 'เรียนรู้ Node.js เบื้องต้น', status: 'done' },
  { id: 2, title: 'สร้าง API ด้วย Express', status: 'in_progress' }
];

// 1. GET: ดึงรายการงานทั้งหมด
app.get('/api/tasks', (req, res) => {
  console.log('GET /api/tasks called');
  res.json(tasks);
});

// 2. POST: เพิ่มงานใหม่
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  
  if (!title) {
    return res.status(400).json({ error: 'กรุณาระบุหัวข้องาน (title)' });
  }

  const newTask = {
    id: tasks.length + 1,
    title: title,
    status: 'todo'
  };

  tasks.push(newTask);
  console.log('New task added:', newTask);
  res.status(201).json(newTask);
});

// 3. GET: ค้นหางานตาม ID
app.get('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'ไม่พบงานที่ระบุ' });
  }

  res.json(task);
});

// เริ่มต้นรันเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});

/**
 * Express Server with SQLite Integration (Week 9)
 * ระบบหลังบ้านที่เชื่อมต่อกับฐานข้อมูล SQLite จริง
 */

const express = require('express');
const db = require('./database');
const app = express();
const PORT = 3000;

app.use(express.json());

// 1. GET: ดึงรายการงานทั้งหมดจาก Database
app.get('/api/tasks', (req, res) => {
  const sql = "SELECT * FROM tasks";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// 2. POST: เพิ่มงานใหม่ลงใน Database
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'กรุณาระบุหัวข้องาน' });
  }

  const sql = "INSERT INTO tasks (title, status) VALUES (?, ?)";
  const params = [title, 'todo'];
  
  db.run(sql, params, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      id: this.lastID,
      title,
      status: 'todo'
    });
  });
});

// 3. DELETE: ลบงาน
app.delete('/api/tasks/:id', (req, res) => {
  const sql = "DELETE FROM tasks WHERE id = ?";
  db.run(sql, req.params.id, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "ลบข้อมูลสำเร็จ", changes: this.changes });
  });
});

app.listen(PORT, () => {
  console.log(`Backend with SQLite running at http://localhost:${PORT}`);
});

/**
 * Database Configuration (SQLite)
 * จัดการการเชื่อมต่อและโครงสร้างตารางข้อมูล
 */

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// กำหนดตำแหน่งไฟล์ฐานข้อมูล
const dbPath = path.resolve(__dirname, 'tasks.db');

// เชื่อมต่อกับฐานข้อมูล
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// สร้างตาราง tasks หากยังไม่มี
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      status TEXT DEFAULT 'todo'
    )
  `, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Tasks table ready.');
    }
  });
});

module.exports = db;

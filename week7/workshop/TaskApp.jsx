import React, { useState, useEffect } from 'react';

/**
 * TaskApp - ระบบจัดการงานแบบสมบูรณ์ (Frontend Demo)
 * รองรับการเพิ่มงาน, ลบงาน, เปลี่ยนสถานะ และบันทึกข้อมูลลง localStorage
 */
const TaskApp = () => {
  // สถานะเริ่มต้นของรายการงาน
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('engce301-tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: Date.now(), title: 'ยินดีต้อนรับสู่ระบบจัดการงาน', status: 'todo' }
    ];
  });

  const [newTaskTitle, setNewTaskTitle] = useState('');

  // บันทึกข้อมูลลง localStorage ทุกครั้งที่ tasks เปลี่ยนแปลง
  useEffect(() => {
    localStorage.setItem('engce301-tasks', JSON.stringify(tasks));
  }, [tasks]);

  // ฟังก์ชันเพิ่มงานใหม่
  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      status: 'todo'
    };
    
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  // ฟังก์ชันเปลี่ยนสถานะงาน
  const toggleStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, status: task.status === 'todo' ? 'done' : 'todo' } 
        : task
    ));
  };

  // ฟังก์ชันลบงาน
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // สไตล์ CSS-in-JS (Premium Glassmorphism)
  const styles = {
    container: {
      backgroundColor: '#0f172a',
      minHeight: '100vh',
      color: '#fff',
      padding: '40px 20px',
      fontFamily: 'Inter, system-ui, sans-serif'
    },
    card: {
      maxWidth: '600px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(12px)',
      borderRadius: '24px',
      padding: '30px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    },
    input: {
      flex: 1,
      background: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      padding: '12px 16px',
      color: '#fff',
      outline: 'none',
      fontSize: '1rem'
    },
    button: {
      background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      border: 'none',
      borderRadius: '12px',
      padding: '12px 24px',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'opacity 0.2s'
    },
    taskItem: {
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '16px',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '12px',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    },
    deleteBtn: {
      background: 'rgba(239, 68, 68, 0.2)',
      color: '#f87171',
      border: 'none',
      borderRadius: '8px',
      padding: '6px 12px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={{ marginBottom: '8px' }}>🚀 Task Flow</h1>
        <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Frontend Lab Week 7 - React.js Development</p>

        {/* ฟอร์มเพิ่มงาน */}
        <form onSubmit={addTask} style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          <input 
            style={styles.input}
            placeholder="วันนี้ต้องทำอะไร..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <button type="submit" style={styles.button}>เพิ่มงาน</button>
        </form>

        {/* รายการงาน */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {tasks.map(task => (
            <div key={task.id} style={styles.taskItem}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <input 
                  type="checkbox" 
                  checked={task.status === 'done'} 
                  onChange={() => toggleStatus(task.id)}
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
                <span style={{ 
                  fontSize: '1.05rem',
                  textDecoration: task.status === 'done' ? 'line-through' : 'none',
                  color: task.status === 'done' ? '#64748b' : '#f1f5f9'
                }}>
                  {task.title}
                </span>
              </div>
              <button 
                onClick={() => deleteTask(task.id)} 
                style={styles.deleteBtn}
              >
                ลบ
              </button>
            </div>
          ))}
          {tasks.length === 0 && (
            <p style={{ textAlign: 'center', color: '#64748b', marginTop: '20px' }}>ไม่มีรายการงานในขณะนี้</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskApp;

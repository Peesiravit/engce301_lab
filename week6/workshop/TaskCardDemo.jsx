import React, { useState } from 'react';

/**
 * TaskCard Component (Low Level Design Demo)
 * 
 * @param {Object} props
 * @param {string} props.title - หัวข้องาน
 * @param {string} props.description - รายละเอียด
 * @param {string} props.status - สถานะ (todo, in_progress, done)
 */
const TaskCard = ({ title, description, status }) => {
  const [isHovered, setIsHovered] = useState(false);

  // สไตล์สำหรับ Glassmorphism
  const cardStyle = {
    background: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#fff',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
    cursor: 'pointer',
    maxWidth: '300px'
  };

  const badgeStyle = {
    fontSize: '0.75rem',
    padding: '4px 8px',
    borderRadius: '20px',
    background: status === 'done' ? '#10b981' : '#6366f1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    display: 'inline-block',
    marginBottom: '10px'
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={badgeStyle}>{status.replace('_', ' ')}</div>
      <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
      <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5' }}>
        {description}
      </p>
    </div>
  );
};

// ตัวอย่างการใช้งานใน App
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'เรียนรู้ React Props', description: 'ทำความเข้าใจการส่งข้อมูลจากแม่ไปลูก', status: 'done' },
    { id: 2, title: 'ออกแบบ LLD', description: 'วาดผัง Component Hierarchy สำหรับโปรเจกต์', status: 'in_progress' }
  ]);

  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', padding: '40px' }}>
      <h1 style={{ color: '#fff', marginBottom: '30px' }}>Task Management (Demo)</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {tasks.map(task => (
          <TaskCard 
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key';

// Middleware to verify JWT
const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'กรุณา Login ก่อน' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Token ไม่ถูกต้องหรือหมดอายุ' });
    }
};

app.get('/api/tasks', requireAuth, (req, res) => {
    res.json({
        user: req.user.username,
        tasks: [
            { id: 1, title: 'Learn Microservices', status: 'In-progress' },
            { id: 2, title: 'Implement JWT', status: 'Completed' }
        ]
    });
});

const PORT = 5002;
app.listen(PORT, () => console.log(`Task Service running on port ${PORT}`));

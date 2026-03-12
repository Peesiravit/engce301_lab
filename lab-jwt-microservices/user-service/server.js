const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key';

const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
    
    const token = authHeader.split(' ')[1];
    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid Token' });
    }
};

app.get('/api/users/profile', requireAuth, (req, res) => {
    res.json({ profile: { username: req.user.username, role: 'Student' } });
});

const PORT = 5003;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));

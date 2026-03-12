const express = require('express');
const Redis = require('ioredis');
const app = express();
const REDIS_URL = process.env.REDIS_URL || 'redis://redis:6379';
const redis = new Redis(REDIS_URL);
const PORT = process.env.PORT || 5000;

app.get('/api/tasks', async (req, res) => {
    try {
        // 1. Check Cache
        const cachedTasks = await redis.get('tasks');
        if (cachedTasks) {
            console.log('Cache Hit');
            return res.json(JSON.parse(cachedTasks));
        }

        // 2. Simulate DB Query (Heavy load)
        console.log('Cache Miss - Querying DB');
        const tasks = [
            { id: 1, title: 'Learn Redis', completed: false },
            { id: 2, title: 'Setup Load Balancer', completed: true }
        ];
        
        // 3. Set Cache with Expiration (60s)
        await redis.set('tasks', JSON.stringify(tasks), 'EX', 60);

        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`API Server running on port ${PORT}`);
});

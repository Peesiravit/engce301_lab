const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/status', (req, res) => {
    res.json({ status: 'API is running', tier: 'Application Tier' });
});

app.listen(PORT, () => {
    console.log(`API Server running on port ${PORT}`);
});

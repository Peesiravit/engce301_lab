const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data/products.json');

// GET all
router.get('/', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
    res.json(data);
});

// GET by ID
router.get('/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
    const product = data.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
});

module.exports = router;

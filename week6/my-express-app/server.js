const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const DATA_FILE = './data.json';

// GET all products
app.get('/api/products', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading data');
        res.json(JSON.parse(data));
    });
});

// POST new product
app.post('/api/products', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading data');
        const products = JSON.parse(data);
        const newProduct = { id: Date.now(), ...req.body };
        products.push(newProduct);
        fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), (err) => {
            if (err) return res.status(500).send('Error writing data');
            res.status(201).json(newProduct);
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

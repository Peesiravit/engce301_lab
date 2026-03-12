const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Import Routes
const productRoutes = require('./routes/products');

// Use Routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Workshop API is running on port 3001');
});

app.listen(port, () => {
    console.log(`Workshop server running at http://localhost:${port}`);
});

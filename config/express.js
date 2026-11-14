const express = require('express');

const app = express();

const authRoutes = require('../routes/authRoutes');
const productsRoutes = require('../routes/products');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);

module.exports = app;
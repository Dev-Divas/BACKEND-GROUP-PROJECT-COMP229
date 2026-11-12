const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoutes = require('../routes/authRoutes');

app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
    res.send("Luxury Marketplace API Running");
});

module.exports = app;

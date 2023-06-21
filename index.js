const express = require('express');
const app = express();
const port = 2023;
const cors = require('cors')
// Menggunakan body parse ========================

//Import Dari Route
const Router = require('./routes/route');

// Import Dari Cors (Perlu melakukan Instalasi)
app.use(cors());

// Menggunakan Router
app.use(Router);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// Identifikasi Server Ready
app.listen(port,() => {
    console.log("Server Ready In http://localhost:2023")
});
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const esportsRoutes = require('./routes/esports.routes.js');
const creatorsRoutes = require('./routes/creators.routes.js');

app.use('/api/esports', esportsRoutes);
app.use('/api/creators', creatorsRoutes);

module.exports = app;
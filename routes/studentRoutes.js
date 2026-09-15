const express = require('express');
const studentRoutes = express.Router();
studentRoutes.get('/students', (req, res) => {
    res.json({
        name: "aravind",
        age: 22
    });
});
studentRoutes.post('/students', (req, res) => {
    res.json({
        message: "Student created successfully"
    });
});
module.exports = studentRoutes;
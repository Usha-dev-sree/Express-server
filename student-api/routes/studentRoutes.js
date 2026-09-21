const express = require('express');
const { getStudents, addStudent } = require('../controllers/studentsControllers');
const studentRoutes = express.Router();
studentRoutes.get('/students',getStudents)
studentRoutes.post('/students',addStudent)


module.exports = studentRoutes;
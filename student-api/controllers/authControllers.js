const login = (req, res) => 
{
    res.json({
        message: "Login successful"
    });
};

const signup = async (req, res) => {
    const { name, email, password, branch, age } = req.body;
    if(!name || !email || !password || !branch || !age) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
    const student = await Student.create({
        name: name,
        email: email,
        password: password,
        branch: branch,
        age: age
    });
    res.json({
        message: "Signup successful"
    });
};
const existingStudent = async (req, res, next) => {
    const { email } = req.body;
    const student = await Student.findOne({ email: email });
    if(student) {
        return res.status(400).json({
            message: "Student already exists"
        });
    }
    next();
};
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    branch: String,
    email: String,
    password: String
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
module.exports = {
    login,
    signup,
    existingStudent
};
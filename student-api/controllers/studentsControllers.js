
const getStudents =  (req, res) => {
    res.json({
        name: "aravind",
        age: 22
    });
};
const addStudent = (req, res) => {
    res.json({
        message: "Student created successfully"
    });
};
module.exports = { getStudents, addStudent };
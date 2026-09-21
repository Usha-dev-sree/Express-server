const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    age: { type: Number, required: true },
    branch: { type: String, required: true, enum: ['CSE', 'ECE', 'MECH', 'CIVIL'] },
});
module.exports = mongoose.model('Student', studentSchema);
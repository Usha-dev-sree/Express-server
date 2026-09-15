const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const mongoose =require("mongoose");
const app = express();
const dns= require("dns");
const devenv = require("dotenv");
devenv.config();
app.use(express.json());

dns.setServers(["1.1.1.1","8.8.8.8"])
app.use(studentRoutes);

app.use(authRoutes);

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed");
        console.log(error.message);
    }
}

connectDB()

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
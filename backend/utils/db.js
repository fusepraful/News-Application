const mongoose = require('mongoose');
const URI = process.env.MONGODB;
const connectDB = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("MongoDB Connection Successfull")
    } catch (error) {
        console.log(error, "Database Connection Failed")
        process.exit(0);
    }
}

module.exports = connectDB;
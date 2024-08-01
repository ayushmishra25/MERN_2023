const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;
const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/yourdbname", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed", error);
        throw error;
    }
};

module.exports = connectDb;

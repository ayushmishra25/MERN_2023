const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddlewares = require("./middlewares/error-middlewares");

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/auth", router);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to MERN");
});

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        // Handle JSON parsing error
        return res.status(400).json({ message: "Invalid JSON format" });
    }
    next(err);
});

app.use(errorMiddlewares); // Custom error handling middleware

const PORT = process.env.PORT || 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
    });
}).catch(err => {
    console.error("Failed to connect to database", err);
});





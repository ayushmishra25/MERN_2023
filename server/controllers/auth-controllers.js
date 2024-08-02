const User = require("../models/user-model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Home logic
const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the best world cup team");
    } catch (error) {
        console.log('Home Error:', error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
};

// Registration logic
const register = async (req, res, next) => {
    try {
        console.log('Request Body:', req.body);

        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = await User.create({ username, email, phone, password: hashedPassword });

        // Generate the token
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ msg: "User created successfully", user: newUser, token, userId: newUser._id.toString() });
    } catch (error) {
        console.log('Register Error:', error);
        next(error); // Use `next` for proper error handling middleware
    }
};

// User login logic 
const login = async (req, res) => {
    try {
        console.log('Login Request Body:', req.body);

        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ msg: "User does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password);

        if (isPasswordValid) {
            // Generate the token
            const token = jwt.sign({ userId: userExist._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ msg: "Login successful", user: userExist, token, userId: userExist._id.toString() });
        } else {
            res.status(400).json({ msg: "Invalid credentials" });
        }
    } catch (error) {
        console.log('Login Error:', error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports = { home, register, login };

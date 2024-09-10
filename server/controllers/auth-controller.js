
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// *-------------------
// Home Logic
// *-------------------
const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------------------
//* User Registration Logic 📝
// *-------------------------------
// 1. Get Registration Data: 📤 Retrieve user data (username, email, password).
// 2. Check Email Existence: 📋 Check if the email is already registered.
// 3. Hash Password: 🔒 Securely hash the password.
// 4. Create User: 📝 Create a new user with hashed password.
// 5. Save to DB: 💾 Save user data to the database.
// 6. Respond: ✅ Respond with "Registration Successful" or handle errors.

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Hash password before saving
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userCreated = await User.create({
    username,
    email,
    phone,
    password: hashedPassword, // Save the hashed password
  });


    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // console.log(error); // Log the error for debugging
    // res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

// *-------------------------------
//* User Login Logic 📝
// *-------------------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Debugging logs
    console.log('User exists: ', userExist);
    console.log('Stored hashed password: ', userExist.password);
    console.log('Entered password: ', password);

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    if (isPasswordValid) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error); // Log the error for debugging
    res.status(500).json({ message: "Internal server error" });
  }
};



module.exports = { home, register, login };
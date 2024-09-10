const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash the password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    try {
      this.password = await bcrypt.hash(this.password, 12);
    } catch (err) {
      return next(err); // Pass the error to the next middleware
    }
  }
  next();
});

// Generate token
userSchema.methods.generateToken = function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '30d',
    });
    return token;
  } catch (err) {
    console.error('Error generating token:', err); // Log any token generation errors
    throw new Error('Token generation failed');
  }
};

const User = mongoose.model('User', userSchema);
module.exports = User;


const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const contactSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }, // Corrected 'massage' to 'message'
});

// Create a model
const Contact = model('Contact', contactSchema);

module.exports = Contact;

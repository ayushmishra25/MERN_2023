const contactForm = async (req, res) => {
    try {
        const response = req.body;
        // Assuming you have a Contact model
        await Contact.create(response);
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.log('Contact Form Error:', error);
        return res.status(500).json({ message: "Error sending message" });
    }
};

module.exports = { contactForm };

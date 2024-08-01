const { z } = require("zod");

// Creating an object schema
const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least three characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(3, { message: "Phone must be at least three characters" })
        .max(255, { message: "Phone must not be more than 255 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(7, { message: "Email must be at least seven characters" })
        .max(1024, { message: "Email must not be more than 1024 characters" })
        .email({ message: "Invalid email address" }),
});

module.exports = signupSchema;

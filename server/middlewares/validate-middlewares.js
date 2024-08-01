const validate = (schema) => async (req, res, next) => {
    try {
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (error) {
        const status = 422;
        const message = error.errors[0].message; // Access the correct error object

        const validationError = {
            status,
            message,
        };
        console.log(validationError);
        
        // Return detailed validation errors
        res.status(status).json({ message });
    }
};

module.exports = validate;



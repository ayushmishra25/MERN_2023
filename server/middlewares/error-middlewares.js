const errorMiddlewares = (err, req, res, next) => {
    // Use || for default values
    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR";
    const extraDetails = err.extraDetails || "ERROR FROM BACKEND";

    // Log the error for debugging
    console.error(err.stack);

    // Send the response
    return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddlewares;

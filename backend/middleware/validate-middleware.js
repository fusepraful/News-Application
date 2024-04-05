const validate = (schema) => async (req, res, next) => {
    try {
        const parsBody = await schema.parseAsync(req.body);
        req.body = parsBody;
        next();
    } catch (err) {
        const msg = err.errors[0].message;
        console.log(msg);
        res.status(400).json({ message: "error", msg })
    }
}

module.exports = validate;
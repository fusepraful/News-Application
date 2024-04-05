const jwt = require('jsonwebtoken');
const User = require('../models/user-model')

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization")

    if (!token) {
        res.status(400).json({
            msg: "unauthorize http token,  Token Not Provided"
        });
    }
    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token from auth middleware", jwtToken);
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECREATE_KEY);
        const userData = await User.findOne({ email: isVerified.email }).
            select({ password: 0, })
        console.log(userData);
        req.user = userData;
        req.token = token;
        req.userId = userData._id; 
        next()
    } catch (error) {
        res.status(400).json({
            msg: "unauthorize http token,  Token Not Provided"
        });
        console.log(error)
    }

};

module.exports = authMiddleware;
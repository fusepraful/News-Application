const express = require ('express');

const router = express.Router();
const authControllers = require('../controllers/auth-controller')
const {signupSchema, loginSchema} = require('../validator/auth-validator')
const validate = require('../middleware/validate-middleware')
const authMiddleware = require('../middleware/auth-middleware')

//home page
router.route('/').get(authControllers.home)

//register page
router.route('/register').post(validate(signupSchema), authControllers.register)

//login page
router.route('/login').post(validate(loginSchema), authControllers.login);

//user authentication
router.route('/user').get(authMiddleware, authControllers.user)

module.exports = router; 
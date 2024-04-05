const { z } = require('zod');

const signupSchema = z.object({
    username: z
        .string({ required_error: "Username is Require" })
        .trim()
        .min(3, { message: "Username Minimum 3 Charactors Require" })
        .max(200, { message: "Username Maximum 200 charactors only require" }),

    email: z
        .string({ required_error: "email is Require" })
        .trim()
        .min(10, { message: "Email Minimum 10 Charactors Require" })
        .max(200, { message: "Email Maximum 200 charactors only require" }),

    phone: z
        .string({ required_error: "phone is Require" })
        .trim()
        .min(10, { message: "Phone Minimum 10 Charactors Require" })
        .max(200, { message: "Phone Maximum 200 charactors only require" }),

        password: z
        .string({ required_error: "password is Require" })
        .min(6, { message: "Password Minimum 3 Charactors Require" })
        .max(200, { message: "Password Maximum 200 charactors only require" }),

      });

const loginSchema = z.object({
    email: z
        .string({ required_error: "email is Require" })
        .trim()
        .min(10, { message: "Email Minimum 10 Charactors Require" })
        .max(200, { message: "Email Maximum 200 charactors only require" }),

        password: z
        .string({ required_error: "Password is Require" })
        .min(3, { message: "Password Minimum 3 Charactors Require" })
        .max(200, { message: "Password Maximum 200 charactors only require" }),

})

module.exports = {signupSchema, loginSchema};

const Contact = require('../models/contact-model');

const contactForm = async(req, res)=>{
    try {
        const response = req.body;
        await Contact.create(response)
        console.log("contact data send successfull")  
        return res.status(200).send({
            message: "message Send Successfully"
        })
    } catch (error) {
        console.log("Error while send data from contact",error)
    }
}

module.exports = contactForm
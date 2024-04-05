const { Schema, model } = require('mongoose');

const uploadNewsSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
   
    author: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const UploadNewsModel = model('UploadNews', uploadNewsSchema); // Removed unnecessary 'new' keyword here
module.exports = UploadNewsModel;

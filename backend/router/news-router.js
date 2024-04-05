const express = require('express');
const { uploadNews, getUploadedNews } = require('../controllers/uploadnews-controller');

const router = express.Router();

router.post('/uploadnews',  uploadNews); 
router.get('/uploadnews', getUploadedNews);

module.exports = router;

const UploadNewsModel = require('../models/uploadnews-model');

const uploadNews = async (req, res) => {
    try {
        // Assuming req.body contains the news data to be uploaded
        const newsData = req.body;

        await UploadNewsModel.create(newsData);
        console.log("News data sent successfully");
        return res.status(200).send({
            message: "News Sent Successfully"
        });
    } catch (error) {
        console.log("Error while sending data from news", error);
        return res.status(500).send({
            error: "Error while sending data from news"
        });
    }
};

const getUploadedNews = async (req, res) => {
    try {
        const response = await UploadNewsModel.find();
        if (!response || response.length === 0) {
            return res.status(404).send({
                message: "No News Found"
            });
        }
        return res.status(200).send({message: response}); // Send just the response array
    } catch (error) {
        console.log("Error while retrieving data from news", error);
        return res.status(500).send({
            error: "Error while retrieving data from news"
        });
    }
};

module.exports = { uploadNews, getUploadedNews };

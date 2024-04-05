require("dotenv").config();
const cors = require('cors');
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require('./router/contact-router');
const newsRoute = require('./router/news-router');
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

//cors policy
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Route for handling authentication
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute)
app.use("/api/news", newsRoute) // Use upload middleware for news route

app.use(errorMiddleware);

const PORT = 5000;

// Connect to the database and start the server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});

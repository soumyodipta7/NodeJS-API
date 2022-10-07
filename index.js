const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const postRoute = require('./posts');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

mongoose.
    connect(process.env.DB_CONNECT,
        () => {
            console.log("connected to db")
        })

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute)
app.get("/api/home", (req, res) => {
    res.send("Welcome to homepage");
});

app.listen(3000, () => {
    console.log("Server running....");
});

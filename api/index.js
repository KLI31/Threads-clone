const express = require('express');
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodeMailer = require('nodemailer');

const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());    


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');

const password = "WMFwFkh83vYh3FRi"

mongoose.connect(`mongodb+srv://nerrax:${password}@cluster0.2qotngx.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to database");
}).catch((e) => {
    console.log("Error while connecting to database");
})



app.listen(port, () => {
    console.log("this is fine")
})
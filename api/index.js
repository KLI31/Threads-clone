const express = require('express');
const bodyParser = require('body-parser');
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

const User = require("./models/user")
const Post = require("./models/post")


// endpoint to register a user in the backend 

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" })
        }

        // Create a new User
        const newUser = new User({ name, email, password })
        newUser.verificationToken = crypto.randomBytes(20).toString("hex")

        await newUser.save()


        // send verification email
        sendVerificationEmail(newUser.email, newUser.verificationToken)
        res.status(200).json({ message: "Registration successful" })
    } catch (e) {
        console.log("error while registering user", error);
        res.status(500).json({ message: "error registering user " })
    }
})


const sendVerificationEmail = async (email, verificationToken) => {

    const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: "lrambao5432@gmail.com",
            pass: "emaqnjzpqbjypvxh"
        }
    })

    const mailOptions = {
        from: "Threads.com",
        to: email,
        subject: "Email verification",
        text: `Please click on the link to verify your email http://localhost:3000/verify-email/${verificationToken}`
    }


    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log("error sending message", error)
    }
}
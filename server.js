require('dotenv').config();

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const utils = require('./utils');

const app = express();
const port = process.env.PORT || 4000;

// static user details
const userData = {
    userId: "789789",
    password: "123456",
    name: "Clue Mediator",
    username: "cluemediator",
    isAdmin: true
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware that checks if JWT token exists and verifies it if it does exist.
// In all future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
    var token = req.headers['authorization'];
    if (!token) return next(); 

    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err) {
            return res.status(401).json({
                error: true,
                message: "Invalid user."
            });
        } else {
            req.user = user;
            next();
        }
    });
});

// request handlers
app.get('/', (req, res) => {
    if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
    res.send('Welcome to the Node.js Tutorial! - ' + req.user.name);
});


// validate the user credentials
app.post('/users/signin', function (req, res) {
    const user = req.body.username;
    const pwd = req.body.password;

    if (!user || !pwd) {
        return res.status(400).json({
            error: true,
            message: "Username or Password is required."
        });
    }

    if (user !== userData.username || pwd !== userData.password) {
        return res.status(401).json({
            error: true,
            message: "Username or Password is wrong."
        });
    }

    const token = utils.generateToken(userData);
    const userObj = utils.getCleanUser(userData);
    return res.json({ user: userObj, token });
});


// verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {
    var token = req.query.token;
    if (!token) {
        return res.status(400).json({
            error: true,
            message: "Token is required." 
        });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err) return res.status(401).json({
            error: true,
            message: "Invalid token."
        });

        if (user.userId !== userData.userId) {
            return res.status(401).json({
                error: true,
                message: "Invalid user."
            });
        }
        var userObj = utils.getCleanUser(userData);
        return res.json({ user: userObj, token });
    })
});


app.listen(port, () => {
    console.log('Server started on: ' + port);
})
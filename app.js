// imports packages

require("dotenv").config()
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

// Config JSON response
app.use(express.json())

// Public Route
app.get("/", (req, res) => {
    res.status(200).json({ msg: "Bem vindo!"})
});

app.listen(3000);
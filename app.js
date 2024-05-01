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

//Register User
app.post("/auth/register", async(req, res) => {

    const {name, email, income ,password, confirmpassword} = req.body

    // validations
    if(!name) {
        return res.status(422).json({ msg: "O nome é obrigatorio!"})
    }

});

app.listen(3000);
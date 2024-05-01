// imports packages

require("dotenv").config()
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

// Config JSON response
app.use(express.json())

// Models
const User = require("./models/User")

// Public Route
app.get("/", (req, res) => {
    res.status(200).json({ msg: "Bem vindo!"})
});

//Register User
app.post("/auth/register", async(req, res) => {

    const {name, email, password, confirmpassword, income} = req.body;

    // validations
    if(!name) {
        return res.status(422).json({ msg: "O nome é obrigatorio!"});
    }
    if(!email) {
        return res.status(422).json({ msg: "O email é obrigatorio!"});
    }
    if(!password) {
        return res.status(422).json({ msg: "A senha é obrigatoria!"});
    }
    if(password !== confirmpassword) {
        return res.status(422).json({ msg: "As senha precisam ser iguais!"});
    }
    if(income < 0) {
        return res.status(422).json({ msg: "A renda é obrigatoria!"});
    }

});

app.listen(3000);
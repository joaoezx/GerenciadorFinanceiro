// imports packages

require("dotenv").config()
const express = require("express")
const postgres = require("postgres")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const app = express()


// Public Route
app.get("/", (req, res) => {
    res.status(200).json({ msg: "Bem vindo!"})
})

app.listen(3000)
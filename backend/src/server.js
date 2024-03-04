require("dotenv").config()
const express = require("express")
const configViewEngine = require("./config/viewEngine")
const conn = require("./config/database")

const app = express()

configViewEngine(app)

const port = process.env.PORT
const host = process.env.HOST_NAME

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`)
})
require("dotenv").config()
const express = require("express")
const app = express()
const router = require("./router/router")
const cors = require("cors")
const PORT = 8004;


// middleware
app.use(express.json())
app.use(cors())
app.use(router)
// console.log("hello")

app.get("/", (req, res) => {
    res.send("<h1>Welcome To Our API</h1>")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
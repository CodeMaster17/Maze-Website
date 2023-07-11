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
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.send("<h1>Welcome To Our API</h1>")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
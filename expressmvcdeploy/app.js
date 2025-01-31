
const express = require("express")
const app = express()

const emprouter = require("./routes/employeeroutes")



app.use(express.json()) 
app.use(express.static(`${__dirname}/public`))
app.use("/api/v1",emprouter)

module.exports =app
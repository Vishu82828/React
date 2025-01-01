const express = require("express")
const cors = require("cors")
const app = express()
const products = [1,2,3,4,5]

app.use(express.json())
app.use(cors())

app.get("/products", (req,res)=>{
    res.send(products)
})
app.listen(5000,console.log("5000 port is renning"))
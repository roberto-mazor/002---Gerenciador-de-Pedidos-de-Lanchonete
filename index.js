const express = require ('express')
const app = express()

app.get("/", function(req,res){
    res.send("Funciona")
})

app.listen(3000)

// http://localhost:3000/
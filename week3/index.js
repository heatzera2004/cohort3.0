const express = require('express')
const app = express()

const PORT = 3000;

app.get('/' , (req,res) => {
    res.send("GET ROUTE");
})

app.listen(PORT , (req,res) => {
    console.log("RUNNING");
})

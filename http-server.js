const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.static(__dirname + '/public'))


app.use("/create", (req, res) => {
    const {file, text} = req.query
    fs.writeFileSync(file, text)
    //res.get(file, text)
    //"http://localhost:3000/create?file=meus-dados.json&text=Hello%20World
    res.send(new Date()) // criado um arquivo tal

})

app.use("/read", (req, res) => {
    const {file} = req.query
    fs.readFileSync(file, text)
    res.send
    //fs.readFileSync
})

app.use("/update", (req, res) => {
    const {file, text} = req.query
    //fs.appendFileSync
})

app.use("/delete", (req, res) =>{
    const {file} = req.query
    //fs.rmSync
})

app.listen(3000, () => console.log("Servidor rodando!"))


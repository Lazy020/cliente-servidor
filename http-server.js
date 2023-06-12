const express = require ("express")
const fs = require ("fs")
const app = express()

app.use(express.static(__dirname + '/public'))

app.use("/create", (req, res) => {
  const { file, text } = req.query
  fs.writeFileSync(file, text)
  res.send(text)
})

app.use("/read", (req, res) => {
  const { file } = req.query
  const filecontent = fs.readFileSync(file).toString()
  res.send(filecontent)
})

app.use("/delete", (req, res) => {
  const { file } = req.query
  fs.rmSync(file)
  res.send("File deleted")
})

app.use("/patch", (req, res) => {
  const { file, text } = req.query
  fs.rmSync(file, text)
  res.send(text)
})

app.listen(3000, () => console.log("Servidor rodando na porta 3000."))
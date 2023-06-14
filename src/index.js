const express = require("express")
const { getDatabaseInstance } = require("./database")

const app = express()

app.use(express.static(__dirname + '/../public'));

// CRUD
// Create
// Read
// Update
// Delete

app.use("/create", async (req, res) => {
  const { title, source, description, thumb } = req.query
  const db = await getDatabaseInstance()
  const result = await db.run(`INSERT INTO movies(title, source, description, thumb) VALUES (?, ?, ?, ?)`, [title, source, description, thumb])
  res.send(result)
})

app.use("/read", async (req, res) => {
  const db = await getDatabaseInstance()
  const result = await db.all(`SELECT * FROM movies`);
  res.send(result);
});

app.use("/delete", async (req, res) => {
  const { id } = req.query
  const db = await getDatabaseInstance()
  await db.run(`DELETE FROM movies WHERE id = ?`, [id])
  res.send(`Filme deletado.`)
})

const port = 3000;
app.listen(port, () => console.log(`Servidor rodando de boa na porta: ${port}.`))

const express = require("express");
const { getDatabaseInstance } = require("./database");

const app = express();

app.use(express.static(__dirname + '/../public'));

app.use("/write", async (req, res) => {
  const { title, source, description, thumb } = req.query;
  const db = await getDatabaseInstance();
  const result = await db.run(
    `INSERT INTO films(title, source, description, thumb) VALUES (?, ?, ?, ?)`,
    [title, source, description, thumb]
  );
  res.send(result);
});

app.use("/read", async (req, res) => {
  const db = await getDatabaseInstance();
  const result = await db.all(
    `SELECT * FROM films`
  );
  res.send(result);
});

app.use("/delete", async (req, res) => {
  const { id } = req.query;
  const db = await getDatabaseInstance();
  await db.run(
    `DELETE FROM films WHERE id = ?`,
    [id]
  );
  res.send(`Filme deletado.`);
});

const port = 3000;
app.listen(port, () => console.log(`Servidor rodando de boa na porta: ${port}.`));

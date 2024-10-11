const express = require("express");
const app = express();

const rotaProduto = require("./rotas/produto.rota")


app.use(express.json());
app.use("/produto", rotaProduto)



app.get("/", (req, res) => {
  res.json({ msg: "Hello from Express!" });
});

app.listen(8080, () => {
  console.log("Servidor pronto na porta 8080");
});
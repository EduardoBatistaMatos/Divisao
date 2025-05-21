const express = require("express");
const cors = require("cors");
const port = process.env.PORT;

const app = express();
app.use(cors());

app.get("/divisao", (req, res) => {
  const { num1, num2 } = req.query;

  if (parseFloat(num2) === 0) {
    return res.status(400).json({ result: "Divisão por zero" });
  }

  const result = parseFloat(num1) / parseFloat(num2);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Serviço rodando na porta ${port}`);
});

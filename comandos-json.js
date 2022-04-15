
const fs = require("fs");

const rawData = fs.readFileSync("data.json");

const receitas = JSON.parse(rawData);

const novaReceita = {
  ...receitas[0],
  id: 3,
  titulo: "Francisco",
  dificuldade: "email@qualquer.com",
};

receitas.push(novaReceita);

fs.writeFileSync("data.json", JSON.stringify(receitas));

console.log(receitas);

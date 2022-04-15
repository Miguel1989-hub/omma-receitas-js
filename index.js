const fs = require("fs");


const nomeEmpresa = "Sistema Omma";
console.log(nomeEmpresa);


const acessarDados = () => {
  const rawData = fs.readFileSync("data.json");
  const listaDeReceitas = JSON.parse(rawData);
}

const inserirDados = () => {
  fs.writeFileSync("data.json", JSON.stringify(listaDeReceitas));
}




const cadastrarReceita = (
  // id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) => {
  const rawData = fs.readFileSync("data.json");
  const listaDeReceitas = JSON.parse(rawData);

  const indiceUltimaReceita = listaDeReceitas.length - 1;

  const novaReceita = {
    id: listaDeReceitas[indiceUltimaReceita].id + 1,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };

  listaDeReceitas.push(novaReceita);

  fs.writeFileSync("data.json", JSON.stringify(listaDeReceitas));

  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};


const exibirReceitas = () => {
  const rawData = fs.readFileSync("data.json");
  const listaDeReceitas = JSON.parse(rawData);

  listaDeReceitas.forEach(({ titulo, ingredientes, vegano }) => {
    console.log("--------------------------------");
    console.log(`Título: ${titulo}`);

    console.log("Ingredientes:");
    ingredientes.forEach((ingrediente) => {
      console.log(`- ${ingrediente}`);
    });

    console.log("É vegano? ", vegano ? "Sim" : "Não");
    console.log("--------------------------------");

  })};


  function deletarReceita(id) {
    const rawData = fs.readFileSync("data.json");
    const listaDeReceitas = JSON.parse(rawData);

    const indiceReceita = listaDeReceitas.findIndex((receita) => {
      return receita.id === id;
    });

    if (indiceReceita === -1) {
      return console.log("Receita não encontrada");
    }

    listaDeReceitas.splice(indiceReceita, 1);

    fs.writeFileSync("data.json", JSON.stringify(listaDeReceitas));

    console.log("Receita deletada com sucesso!");
  }

  const buscarReceita = (termo) => {
      const rawData = fs.readFileSync("data.json");
      const listaDeReceitas = JSON.parse(rawData);
    
      return listaDeReceitas.filter((receita) => {
      return receita.titulo.toLowerCase().indexOf(termo) != -1;
    });
  };
  
  const atualizarReceita = (id, receitaAtualizada = {}) => {
    const rawData = fs.readFileSync("data.json");
    const listaDeReceitas = JSON.parse(rawData);
    
    const indiceReceita = listaDeReceitas.findIndex((receita) => {
      return receita.id === id;
    });

    if (indiceReceita === -1) {
      return console.log("Receita não encontrada");
    }

    listaDeReceitas[indiceReceita] = {
      ...listaDeReceitas[indiceReceita],
      ...receitaAtualizada,
    };

    fs.writeFileSync("data.json", JSON.stringify(listaDeReceitas));

    console.log(`Receita "${receitaAtualizada.titulo}" atualizada com sucesso!`);
  };

  // Cadastra uma nova receita
  // cadastrarReceita(
  //   "Pipoca",
  //   "simples",
  //   ["1 ovo", "1 colher de azeite", "Sal a gosto"],
  //   "Quebre o ovo em um copo americano, jogue sal, e leve à frigideira.",
  //   "https://google.com",
  //   false
  // );


  atualizarReceita(1, {"titulo": "Cachorro frio", "dificuldade": "dificil"});
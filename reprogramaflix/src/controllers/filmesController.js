const filmes = require("../models/filmes.json"); //chamar nosso json

const getAll = (request, response) => { //cria função getAll
  response.status(200).send(filmes);
}
const getById = (request, response) => {
  const idRequerido = request.params.id;
  let idFiltrado = filmes.find(filme => filme.id == idRequerido);

  if (idFiltrado == " " || idFiltrado == undefined) {
    response.status(404).json([{
      "mensagem": "id não existente"
    }])
  } else {
    response.status(200).json(idFiltrado);
  }
}
const getByTitle = (request, response) => {
  const titulo = request.query.titulo.toLowerCase();
  const tituloFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo));

  if (tituloFiltrado == "" || tituloFiltrado == undefined) {
    response.status(400).json([{
      "mensagem": "por favor, digite um título válido"
    }])
  } else {
    response.status(200).send(tituloFiltrado);
  }
}
const getByGenre = (request, response) => {
  const generoRequisitado = request.query.genero;
  let novaLista = [];

  //ARRAY.forEach(elemento=>{logica})
  filmes.forEach(filme => {//percorrendo o json de filmes
    let generoLista = filme.Genre.split(","); //transformei string de generos em lista
    for (item of generoLista) {//percorri a lista de generos
      //SE o item for igual genero da requisição E SE o filme.Genero tiver esse item
      if (item.includes(generoRequisitado) && filme.Genre.includes(item)) {
        novaLista.push(filme);
      }
    }
  });
  response.status(200).send(novaLista);
}

module.exports = { //exportando as funções
  getAll,
  getById,
  getByTitle,
  getByGenre
}
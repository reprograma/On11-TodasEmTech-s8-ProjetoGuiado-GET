const series = require("../models/series.json");

const getAll = (request, response) => {
  response.status(200).send(series);
}
const getById = (request, response) => {
  const idRequerido = request.params.id;
  let idFiltrado = series.find(serie => serie.id == idRequerido);
  
  if (idFiltrado == " " || idFiltrado == undefined) {
    response.status(404).json([{
      "mensagem": "id não existente"
    }]);
  } else {
    response.status(200).json(idFiltrado);
  }
}
const getByTitle = (request, response) => {
  const titulo = request.query.titulo.toLowerCase();
  const tituloFiltrado = series.find(serie => serie.title.toLowerCase().includes(titulo));
  
  if (tituloFiltrado == "" || tituloFiltrado == undefined) {
    response.status(400).json([{
      "mensagem": "por favor, digite um título válido"
    }]);
  } else {
    response.status(200).send(tituloFiltrado);
  }
}
const getByGenre = (request, response)=> {
  const generoRequerido = request.query.genero;
  let generoFiltrado = series.filter(serie => serie.genre.includes(generoRequerido));

  if (generoFiltrado == "" || generoFiltrado == undefined) {
    response.status(400).json([{
      "mensagem": "por favor, digite um gênero válido"
    }]);
  }
  response.status(200).send(generoFiltrado);
}

module.exports = {
  getAll,
  getById,
  getByTitle,
  getByGenre
}
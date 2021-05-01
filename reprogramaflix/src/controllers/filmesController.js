const filmes = require("../models/filmes.json");

const getAll = (req, res) => { //criando função getAll
  res.status(200).send(filmes);
};

const getById = (req, res) => {
  const id = req.params.id;
  const idFiltrado = filmes.find(filme => filme.id == id)
    if(idFiltrado == undefined || id == ""){
      res.status(404).json([{
        "mensagem": "id não encontrado"
      }])
    } else {
    res.status(200).send(idFiltrado);
    }
};

const getByTitle = (req, res) => {
  const title = req.query.title.toLowerCase();
  const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(title));
 
  if(filmeFiltrado == undefined || title == "" || title == " "){
    res.status(400).json([{
      "mensagem": "Por favor, digite um título válido"
    }])
  } else {
    res.status(200).send(filmeFiltrado);
  }
  
};

module.exports = { //exportando as funções
  getAll,
  getById,
  getByTitle
}
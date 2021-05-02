const filmes = require('../models/filmes.json');

const getAll = (request, response) => { //função com lógica para a rota get /todos em router
  response.status(200).json(filmes)
}

const getById = (req, res) => {
  const id = req.params.id
  const idFiltrado = filmes.find(i => i.id == id)

  if(id === '' || idFiltrado === undefined) {
    res.status(404).json([{
      "mensagem": "id não existente"
    }])
  } else {
    res.status(200).json(idFiltrado)
  }
}

const getByGenre = (req, res) => {
  const genero = req.query.genero
  const novaLista = []

  filmes.forEach(filme => {
    let generoList = filme.Genre.split(',')
    for(i of generoList){
      if(i.includes(genero) && filme.Genre.includes(i)){
        console.log(filme)
      }
    }
    novaLista.push(filme)
  })
  res.status(200).send(novaLista)
}

const getByTitle = (req, res) => {
  const titulo = req.query.titulo.toLowerCase()
  const filme = filmes.find(i => i.Title.toLowerCase().includes(titulo)) //o includes busca no i.Title os títulos que contenham algo do que foi digitado pelo usuário
  //uso toLowerCase nos dois para que possam perder as diferenças entre maiúsculas e minúsculas
  console.log(titulo, filme)

  if(filme === undefined || titulo === '') {
    res.status(400).json([{
      "mensagem": "Digite um valor válido"
    }])
  } else {
    res.status(200).send(filme)
  }
}

module.exports = {
  getAll,
  getById,
  getByTitle,
  getByGenre
}
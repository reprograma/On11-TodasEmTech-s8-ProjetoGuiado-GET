const series = require('../models/series.json');

const getAllSeries = (req, res) => {
  res.status(200).json(series)
}

const getBySerieId = (req, res) => {
  const id = req.params.id
  const idFind = series.find(i => i.id === id)

  if (id === '' || idFind === undefined) {
    res.status(404).json([{
      "mensagem": "ID inexistente, digite um id válido"
    }])
  } else {
    res.status(200).json(idFind)
  } 
}

const getBySerieTitle = (req, res) => {
  const titulo = req.query.titulo.toLowerCase()
  const serie = series.find(i => i.title.toLowerCase().includes(titulo))
  console.log(titulo, serie)

  if(titulo === '' || serie === undefined) {
    res.status(400).json([{
      "mensagem": "Serie não encontrada, digite um titulo válido"
    }])
  } else {
    res.status(200).json(serie)
  }
}

const betbySerieGenre = (req, res) => {
  const genero = req.query.genero.toLowerCase()
  const serieList = []
  
  series.forEach(serie => {  
    let generoList = serie.genre
    generoList.forEach(i => {
      i.includes(genero)
    })
    serieList.push(serie)
  })
  res.status(200).send(serieList)
}

//não está completo, como na rota de filmes, mas não consegui fazer retornar com os tratamentos necessários :(

module.exports = {
  getAllSeries,
  getBySerieId,
  getBySerieTitle,
  betbySerieGenre
}
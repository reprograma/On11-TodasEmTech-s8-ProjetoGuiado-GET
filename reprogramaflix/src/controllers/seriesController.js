const { request, response } = require("express")
const series = require("../models/series.json")

const getAll = (request,response)=>{
   response.status(200).send(series)
}

const getById = (request, response)=>{
   const idRequisitado = request.params.idRequisitado
   const idFiltered = series.find(serie => serie.id == idRequisitado)
   if(idFiltered == undefined || idRequisitado == ""){
      response.status(404).json([{
         "mensagem": "Por favor, digite um id válido"
      }])
   } else {
      response.status(200).json(idFiltered)
   }
}

const getByTitle = (request, response)=>{
   const titulo = request.query.titulo.toLowerCase()
   const serieFiltered = series.find(serie => serie.title.toLowerCase().includes(titulo))

   if(titulo == "" || serieFiltered == undefined){
      response.status(400).json([{
         "mensagem": "Por favor, digite um titulo válido"
      }])
   } else{
      response.status(200).send(serieFiltered)
   }
}

const getByGenre = (request,response) =>{
   const genero = request.query.genero
   series.forEach(serie => {
      const generoLista = serie.genre
      for (item of generoLista){
         if(item.includes(genero) && serie.genre.includes(item)){
            console.log(serie)
            novaLista.push(serie)
         }
      }
   });
   response.status(200).send(novaLista)
}

module.exports = {
   getAll,
   getById,
   getByTitle,
   getByGenre
}
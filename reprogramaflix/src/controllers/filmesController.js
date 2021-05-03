const { response } = require("express")
const { request } = require("../app")
const filmes = require("../models/filmes.json")

const getAll = (request, response)=>{
    response.status(200).send(filmes)
}

const getById = (request, response)=>{
    const idRequerido = request.params.idRequerido
    let idFiltrado = filmes.find(filme => filme.id == idRequerido)

    if(idFiltrado == undefined || idRequerido == ""){
        response.status(404).json([{
            "mensagem":"id não existente"
        }])
    } else{
        response.status(200).json()
    }
}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo))
    
    if(titulo == "" || filmeFiltrado == undefined){
        response.status(400).json([{
            "mensagem":"por favor, digite um titulo válido"
        }])
    } else{
        response.status(200).json(filmeFiltrado)
    }
}

module.exports = {
    getAll,
    getById,
    getByTitle
}
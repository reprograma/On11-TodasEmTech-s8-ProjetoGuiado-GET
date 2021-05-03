const { request, response } = require("../app")
const series = require("../models/series.json")

const getAll = (request, response)=>{
    response.status(200).send(series)
}

const getById = (request, response)=>{
    const idRequerido = request.params.idRequerido
    let idFiltrado = series.find(serie => serie.id == idRequerido)

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
    const serieFiltrada = series.find(serie => serie.title.toLowerCase().includes(titulo))
    
    if(titulo == "" || serieFiltrada == undefined){
        response.status(400).json([{
            "mensagem":"por favor, digite um titulo válido"
        }])
    } else{
        response.status(200).json(serieFiltrada)
    }
}


module.exports = {
    getAll,
    getById,
    getByTitle
}
const { json } = require("express")
const series = require("../models/series.json") //chama o json que estamos trabalhando

const getAll = (request, response)=>{ //cria a função que chama tudo
    response.status(200).send(series)
}

const getById = (request, response)=>{ //cria a função que chama os ID's
    const idRequerido = request.params.id
    let idFiltrado = series.find(serie => serie.id == idRequerido)

    if(idFiltrado == undefined || idRequerido == " "){
        response.status(404).json([{
            "mensagem":"id não existente"
        }])
    }else{
        response.status(200).json(idFiltrado)       
    }   
}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const serieFiltrada = series.find(serie => serie.title.toLowerCase().includes(titulo))

    if(titulo == "" || serieFiltrada == undefined){
        response.status(400).json([{
            "mensagem":"por favor, digite um titulo válido"
        }])
    } else {
        response.status(200).send(serieFiltrada)
    }
}

const getByGenre = (request, response)=>{
    const genero = request.query.genero
    let generoFiltrado = series.filter(serie => serie.genre.includes(genero))

    response.status(200).send(generoFiltrado)
}

module.exports = { //exporta as funções
    getAll,
    getById,
    getByTitle,
    getByGenre
}
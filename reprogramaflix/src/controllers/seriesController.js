const series = require("../models/series.json")

const getAll = (request, response)=>{
    response.status(200).send(series)
}

const getById = (request, response)=>{
    const idRequerido = request.params.id
    let idFiltrado = series.find(serie => serie.id == idRequerido)

    if(idFiltrado == undefined || idFiltrado == " "){
        response.status(404).send([{
            "mensagem":"Parametro invalido, tente novamente!"
        }])
    }else{
        response.status(200).send(idFiltrado)
    }
}

const getByTitle = (request, response)=>{
    const tituloRequerido = request.query.titulo.toLowerCase()
    let tituloFiltrado = series.find(serie => serie.title.toLowerCase().includes(tituloRequerido))

    if(tituloFiltrado == undefined || tituloFiltrado == " "){
        response.status(404).send([{
            "mensagem":"Parametro invalido, tente novamente!"
        }])
    }else{
        response.status(200).send(tituloFiltrado)
    }
}

const getByGenre = (request, response)=>{
    const generoRequerido = request.query.genero
    let generoFiltrado = series.filter(serie => serie.genre.includes(generoRequerido))

    response.status(200).send(generoFiltrado)
}

module.exports = {
    getAll,
    getByTitle,
    getById,
    getByGenre
}
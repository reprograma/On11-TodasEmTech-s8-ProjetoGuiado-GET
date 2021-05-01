const series = require("../models/series.json")

const getAll = (request, response)=>{
    response.status(200).send(series)
}

const getById = (request, response)=>{
    const idPedido = request.params.id
    let idFiltrado = series.find(serie=> serie.id == idPedido)

    if(idFiltrado == undefined || idPedido == " "){
        response.status(404).json([{
            "mensagem":"Digite um Id"
        }])
    }else{
        response.status(200).json(idFiltrado)       
    }
}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    var serieSolicitada = series.find(serie=> serie.title.toLowerCase().includes(titulo))

    if(titulo == " " || serieSolicitada == undefined){
        response.status(404).json([{
            "mensagem":"Titulo invalido, tente novamente"
        }])
    } else {
        response.status(200).send(serieSolicitada)
    }
}

const getByGenre = (request, response)=>{
    const genero  = request.query.genero
    let generoFiltrado = series.filter(serie => serie.genre.includes(genero))

    response.status(200).send(generoFiltrado)
}

module.exports = { 
    getAll,
    getById,
    getByTitle,
    getByGenre
}

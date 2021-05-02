const series = require("../models/series.json")

const getAll = (request, response)=>{
    response.status(200).send(series)
}
const getById =(request,response)=>{
    const idRequirido = request.params.id
    let idFiltrado = series.find(serie => serie.id == idRequirido)

    if(idFiltrado == undefined || idRequirido == " "){
        response.status(404).json([{
            "mensagem": "Insira um id compatível para receber informações"
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
            "mensagem": "por favor, digite um nome válido!"
        }])
    } else{
        response.status(200).send(serieFiltrada)
    }

}

const getByGenre = (request, response)=>{
    const generoRequisitado = request.query.genero
    const generoFiltrado = series.find(serie => serie.genre.includes(genero))

    if(generoRequisitado == "" || generoFiltrado == undefined){
        response.status(400).json([{
            "mensagem": "por favor, digite um nome válido!"
        }])
    } else{
        response.status(200).send(generoFiltrado)
    }

}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre
}
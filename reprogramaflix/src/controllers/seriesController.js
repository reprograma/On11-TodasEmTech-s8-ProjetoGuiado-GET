const series = require("../models/series.json") //chamar nosso json

const getAll = (request, response)=>{ 
    response.status(200).send(series)
}
const getById = (request, response)=>{
    const id = request.params.id
    let idFiltrado = series.find(serie => serie.id == id)

    if(idFiltrado == undefined || id == " "){
        response.status(404).json([{
            "mensagem":"id não existente"
        }])
    }else{
        response.status(200).json(idFiltrado)       
    }   
}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const serieFiltrada = series.find(serie => serie.Title.toLowerCase().includes(titulo))

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
    const generoSolicitado = series.find(serie => serie.Genre.includes(genero))

    if(genero == "" || generoSolicitado == undefined){
        response.status(400).json([{
            "mensagem":"por favor, digite um genero válido"
        }])
    } else {
        response.status(200).send(generoSolicitado)
    }
}
    

module.exports = { 
    getAll,
    getById,
    getByTitle,
    getByGenre
}
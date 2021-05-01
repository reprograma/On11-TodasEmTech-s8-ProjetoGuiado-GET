const { json } = require("express")
const series = require("../models/series.json")

const getAll = (request, response)=>{
response.status(200).json(series)
}

const getById =(request, response)=>{
    const idRequested = request.params.idRequerido
    const idFiltered = series.find(serie => serie.id == idRequested)
console.log(idFiltered)

    if (idFiltered == undefined || idRequested == " ") {
        response.status(404).json([{
            "mensagem de erro" : "por favor digite uma ID de série válida"
        }])    
    } else {
        response.status(200).send(idFiltered)
        }
}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const serieFiltrada = series.filter(serie => serie.title.toLowerCase().includes(titulo))
    if(titulo == "" || serieFiltrada == undefined){
        response.status(400).json([{
            "mensagem de erro" : "por favor digite um titulo de série válido"
        }])      
    } else {
    response.status(200).send(serieFiltrada)
    }
}

const getByGenre = (request, response)=>{
    const generoInput = request.query.genero
    const serieGenero = series.filter(serie => serie.genre.includes(generoInput) && serie.genre.includes(generoInput))

    if(generoInput == "" || serieGenero == undefined){
            response.status(400).json([{
                "mensagem de erro" : "por favor digite um genero de série válido"
            }])      
        } else
    {
        response.status(200).send(serieGenero)
    }
}


module.exports = { 
    getAll, 
    getById,
    getByTitle,
    getByGenre
}

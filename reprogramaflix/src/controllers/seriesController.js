const { json } = require("express")
const { request, response } = require("../app")
const series = require("../models/series.json")


const getAllSeries = (resquest, response)=>{
    response.status(200).send(series)
}

const getByIdSeries = (request,response)=>{
    const idSeries = request.params.id
    const idFiltradoSeries = series.find(serie => serie.id == idSeries)

    if(idFiltradoSeries == undefined || idSeries == " "){
        response.status(404).json({
           "mensagem": "ID não encontrado, por favor insira um id válido.",
           "link": "https://http.cat/[404]"
   
        })
            
    }else{
    response.status(200).send(idFiltradoSeries)
    }
}

const getByTitleSeries = (request, response)=>{
    const titleSeries = request.query.titleSeries.toLowerCase()
    const titleFilterSeries = series.find(serie =>serie.title.toLowerCase().includes(titleSeries))

    if(titleFilterSeries == undefined || titleSeries == " "){
        response.status(404).json({
            "mensagem": "Título nao encontrado, por favor digite um titulo válido."
        })
    }else{
        response.status(200).json(titleFilterSeries)
    }
}

const getByGenreSeries = (request, response) => {
    const genreSeries = request.query.genreSeries
    let newListSeries = []

    series.forEach(serie => {
       let genreList = serie.genre
       for(genero of genreList){
           if(genero.includes(genreSeries) && serie.genre.includes(genero)){
               console.log(serie)
               newListSeries.push(serie)
           }
       }
    })
    response.status(200).json(newListSeries)
}


module.exports = {
    getAllSeries,
    getByTitleSeries,
    getByGenreSeries,
    getByIdSeries,

}

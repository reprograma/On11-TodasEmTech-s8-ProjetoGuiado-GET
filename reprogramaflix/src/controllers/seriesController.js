const series = require("../models/series.json")//chama series.json

//return all series : GET/series
const allSeries = (request, response)=>{
    response.status(200).json(series)
}

//return series by ID
const seriesByID = (request, response)=>{
    const seriesId = request.params.seriesId

    const id = series.find(serie => serie.id == seriesId)

    if(seriesId == " "|| id == undefined){
        response.status(404).json([{"mensagem":"id não existente"}])
    }else{
        response.status(200).json(id)
    }
}

//return series by Title
const seriesByTitle = (request, response)=>{

    const seriesTitle = request.query.seriesTitle.toLowerCase()

    const title = series.find(serie => serie.title.toLowerCase().includes(seriesTitle))

    if(seriesTitle == " " || title == undefined){
        response.status(404).json([{"mensagem":"por favor, digite um titulo válido"}])
    }else{
        response.status(200).json(title)
    }
}

//return series by genre
const seriesByGenre = (request, response)=>{
    const genre = request.query.genre

    const serieGenre = series.filter(serie => serie.genre.includes(genre))

    if(genre ==" " || serieGenre == undefined){
        response.status(404).json({"mensagem":"por favor, digite um genero válido"})
    }else{
        response.status(200).json(serieGenre)
    }

}




module.exports ={
    allSeries,
    seriesByID,
    seriesByTitle,
    seriesByGenre
}
const series = require("../models/series.json")




const getAllSeries = (request, response)=>{

    response.status(200).send(series)


}

const getSerieById = (request, response)=>{
    const idRequire = request.params.id 
    response.status(200).json(series.find(serie => serie.id == idRequire))
}

const getSeriesByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const serieFiltrada = series.find(serie => serie.toLowerCase().includes(titulo))

  

    if(titulo == '' || serieFiltrada == undefined){
        resquest.status(400).json([{
            "mensagem":"digite um titulo válido"
        }])
    } else {
        response.status(200).send(serieFiltrada) 
    }
}

const getSerieByGenre = (request, response)=>{
    const genero = request.query.genero.toLowerCase()
    const generoFiltrado = series.filter(serie => serie.genre.toLowerCase().includes(genero))
    if(genero == '' || generoFiltrado == undefined){
        resquest.status(400).json([{
            "mensagem":"digite um gênero válido"
        }])
    } else{
        response.status(200).json(generoFiltrado)
    }
}








module.exports={getAllSeries,
                 getSerieById,
                  getSeriesByTitle, 
                  getSerieByGenre}
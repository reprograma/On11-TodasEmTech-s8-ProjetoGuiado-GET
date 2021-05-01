const series = require("../models/series.json");

const getSeries = (req, res)=>{
    res.status(200).json(series)
}

const getSeriesId = (req, res)=>{
    const idSerie = req.params.id
    res.status(200).json(series.find(serie => serie.id == idSerie))
}

const getSerieTitle = (req, res) =>{
    const tituloSerie = req.query.tituloSerie.toLowerCase()
    const serieFiltrado = series.find(serie => serie.title.toLowerCase().includes(tituloSerie))
    console.log(tituloSerie)
    console.log(serieFiltrado)
    if(tituloSerie == '' || serieFiltrado == undefined){
        res.status(400).json([{
            "mensagem":"Por favor, digite um titulo válido"
        }])
    } else {
        res.status(200).send(serieFiltrado) 
    }
}

const getSerieGenre = (req, res)=>{
    const generoSerie = req.query.generoSerie.toLowerCase()
    const generoSFiltrado = series.filter(serie => serie.Genre.toLowerCase().includes(generoSerie))
    if(generoSerie == '' || generoSFiltrado == undefined){
        res.status(400).json([{
            "mensagem":"Por favor, digite um genero válido"
        }])
    } else{
        res.status(200).json(generoSFiltrado)
    }
}

module.exports = {
    getSeries,
    getSeriesId,
    getSerieTitle,
    getSerieGenre
}
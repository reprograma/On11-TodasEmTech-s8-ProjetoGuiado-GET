const { request, response } = require("express");
const series = require("../models/series.json");

const getAll = (request, response)=> {
    response.status(200).json(series);
}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const serieFiltrada = series.find(serie => serie.title.toLowerCase().includes(titulo));

    if (titulo == " " || serieFiltrada == undefined){
        response.status(400).json([{
            "mensagem":"por favor, digite um titulo válido"
        }])
    } else {
        response.status(200).send(serieFiltrada);
    }

}

const getById = (request,response)=>{
    const id = request.params.id
    let idFiltrado = series.find(serie => serie.id == id);

    if (idFiltrado == undefined || id == " "){
        response.status(400).json([{
            "mensagem":"ID incorreto, tente novamente"
        }])
    } else {
        response.status(200).send(idFiltrado)
    }
}

module.exports = {
    getAll,
    getByTitle,
    getById
}
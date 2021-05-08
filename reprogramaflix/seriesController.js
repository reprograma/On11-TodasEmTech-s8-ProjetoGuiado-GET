const { request } = require("node:http")
const { send } = require("node:process")
const series = require("../models/series.json")
const { response, get } = require("./app")

const getAll = (request.response)=>{
    response.status(200).send(series)

}
const getById = (request.response)=>{
    const idRequerido = request.params.id
    response.status(200).json(series.find(series.id == idRequerido))
}

const getByTitle = (request.response)=>{
    const titulo = request.query.titulo.tolowerCase()
    const seriesFiltrado = series.find(series.Title.tolowerCase().includes(titulo))

    console.log(titulo)
    console.log(seriesFiltrado)

    if(seriesFiltrado = undefined){
        response.status(400).json
       "Mensagem":"Por favor, digite um titulo válido"
    }])

} else {
    response.status (200).send(seriesFiltrado)
}

module.exports = {
    getAll
    getById
    getByTitle
}
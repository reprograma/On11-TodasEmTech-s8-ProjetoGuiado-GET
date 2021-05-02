const series = require("../models/series.json")

const getAll = (request, response) => {
    response.status(200).send(series)
}

const getById = (request, response) => {
    const id = request.params.id
    const idFiltrado = series.find(serie => serie.id == id)
    if (id == " " || idFiltrado == undefined) {
        response.status(404).json([{
            "mensagem": "Id não existente"
        }])
    } else {
        response.status(200).json(idFiltrado)
    }
}

const getByTitle = (request, response) => {
    const titulo = request.query.titulo.toLowerCase()
    const serieFiltrado = series.find(serie => serie.title.toLowerCase().includes(titulo))

    if (titulo == "" || serieFiltrado == undefined) {
        response.status(400).json([{
            "mensagem": "Por favor, digite um título válido"
        }])
    } else {
        response.status(200).json(serieFiltrado)
    }
}

const getByGenre = (request, response) => {
    const genero = request.query.genero;
    const serieGenero = series.filter(serie => serie.genre.includes(genero));

    console.log(genero)
    console.log(serieGenero)

    if (genero == "" || serieGenero == undefined) {
        response.status(400).json([{
            "mensagem": "Por favor, digite um genero válido"
        }])
    } else {
        response.status(200).json(serieGenero)
    }
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre
}
const series = require("../models/series.json")

const getAll = (request, response) => {
    response.status(200).send(series)
}
const getById = (request, response) => {
    const idRequerido = request.params.id
    let idFiltrado = series.find(serie => serie.id == idRequerido)

    if (idFiltrado == undefined || idRequerido == "") {
        response.status(404).json([{
            "mensagem": "ID não existente!"
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
            "mensagem": "Titulo inválido, digite novamente!"
        }])
    } else {
        response.status(200).send(serieFiltrado)
    }
}
const getByGenre = (request, response) => {
    const genero = request.query.genero
    const generoFiltrado = series.filter(serie => serie.genre.includes(genero));

    if (genero == "" || generoFiltrado == undefined) {
        response.status(400).json([{
            "mensagem": "Gênero inválido, digite novamente!"
        }]);
    } else {
        response.status(200).send(generoFiltrado);
    }
}
module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre
}
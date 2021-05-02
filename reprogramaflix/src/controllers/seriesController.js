const series = require("../models/series.json")

const getAllSeries = (request, response) => {
    response.status(200).json(series);
}

const getByIdSeries = (request, response) => { // usar path params
    const idRequerido = request.params.id;
    const idFiltrado = series.find(series => series.id == idRequerido)
    if (idFiltrado == "" || idFiltrado == undefined) {
        response.status(400).json([{
            "mensagem:": "Id inválido, tente novamente"
        }]);
    }
    else {
        response.status(200).send(idFiltrado);
    }
}

const getByTitleSeries = (request, response) => {
    const titulo = request.query.titulo.toLowerCase();
    const tituloFiltrado = series.find(series => series.title.toLowerCase().includes(titulo));
    if (titulo == "" || tituloFiltrado == undefined) {
        response.status(400).json([{
            "mensagem:": "Digite um título válido"
        }])
    }
    else {
        response.status(200).send(tituloFiltrado);
    }
}

const getByGenreSeries = (request, response) => {
    const generoRequisitado = request.query.genero;
    let novaLista = []
    series.forEach(series => {
        let generoLista = series.genre

        for (item of generoLista) {
            if (item.includes(generoRequisitado) && series.genre.includes(item)) {
                novaLista.push(series)
            }
        }
    })
    response.status(200).send(novaLista)
}

module.exports = {
    getAllSeries,
    getByIdSeries,
    getByTitleSeries,
    getByGenreSeries
}

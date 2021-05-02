const filmes = require("../models/filmes.json")

const getAll = (request, response) => {
    response.status(200).send(filmes)
}

const getById = (request, response) => {
    const id = request.params.id
    const idFiltrado = filmes.find(filme => filme.id == id)

    if (id == " " || idFiltrado == undefined) {
        response.status(404).json([{
            "mensagem": "Id não existenteo"
        }])
    } else {
        response.status(200).json(idFiltrado)
    }
}

const getByTitle = (request, response) => {
    const titulo = request.query.titulo.toLowerCase()
    const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo))

    console.log(titulo)
    console.log(filmeFiltrado)

    if (titulo == " " || filmeFiltrado == undefined) {
        response.status(400).json([{
            "mensagem": "Por favor, digite um título válido"
        }])
    } else {
        response.status(200).send(filmeFiltrado)
    }
}

const getByGenre = (request, response) => {
    const generoRequisitado = request.query.generoRequisitado
    let novaLista = []

    filmes.forEach(filme => {
        let generoLista = filme.Genre.split(",")

        for (item of generoLista) {
            if (item.includes(generoRequisitado) && filme.Genre.includes(item)) {
                console.log(item)
                novaLista.push(filme)
            }
        }
    })
    response.status(200).send(novaLista)
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre
}
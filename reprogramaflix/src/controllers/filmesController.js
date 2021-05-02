const filmes = require("../models/filmes.json")

const getAll = (request, response) => {
    response.status(200).send(filmes);
}

const getById = (request, response) => {
    const idRequerido = request.params.id;
    const idFiltrado = filmes.find(filme => filme.id == idRequerido)
    if (idFiltrado == "" || idFiltrado == undefined) {
        response.status(404).json([{
            "mensagem": "ID não encontrado. Digite um valor válido"
        }])

    }
    else {
        response.status(200).send(idFiltrado);
    }
}

const getByTitle = (request, response) => {
    const titulo = request.query.titulo.toLowerCase();
    const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo)) //com o include, vamos retornar o que ele digitou

    if (titulo == "" || filmeFiltrado == undefined) {
        response.status(400).json([{
            "mensagem": "Por favor, digite um título válido"
        }])
    }
    else {
        response.status(200).send(filmeFiltrado)
    }
}

const getByGenre = (request, response) => {
    const generoRequisitado = request.query.genero;
    let novaLista = []
    //  Array.forEach(elemento => {logica})
    filmes.forEach(filme => {
        let generoLista = filme.Genre.split(",") //separa a string a partir da vírgula como referência

        for (item of generoLista){
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
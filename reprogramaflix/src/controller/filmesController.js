const filmes = require("../models/filmes.json")

const getAll = (request, response)=>{
    response.status(200).send(filmes)
}
const getById = (request, response)=>{
    const idRequirido = request.params.id
    let idFiltrado = filmes.find(filme => filme.id == idRequirido)
    if(idFiltrado == undefined || idRequirido == " "){
        response.status(404).json([{
            "mensagem":"id não existente"
        }])
    }else{
    response.status(200).json(idFiltrado)
    }
}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo))
    response.status(200).send(filmeFiltrado)

    if( titulo == " " || filmeFiltrado == undefined){
        response.status(400).json([{
            "mensagem":"por favor, digite um título válido"
        }])
    } else {
        response.status(200).send(filmeFiltrado)
    }


}

module.exports = {
    getAll,
    getById,
    getByTitle
}
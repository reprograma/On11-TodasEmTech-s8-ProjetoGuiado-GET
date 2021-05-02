const filmes = require("../models/filmes.json");

// Função que retorna todos os filmes
const getAll = (request, response)=>{
    response.status(200).send(filmes); // 'send' não constroi json
}

// Função que retorna um filme pelo id
const getById = (request, response)=>{
    const idRequerido = request.params.idReq;
    const idFiltrado = filmes.find(filme => filme.id == idRequerido);

    if (idRequerido == null || idFiltrado == undefined) {
        response.status(400).json([{
            "mensagem": "id inválido"
        }])
    } else {
        response.status(200).send(idFiltrado);
    }

}

// Função que retorna um filme pelo título
const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase();
    const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo));

    if (titulo == null || filmeFiltrado == undefined) {
        response.status(400).json([{
            "mensagem": "Por favor, digite um título válido"
        }])
    } else {
        response.status(200).send(filmeFiltrado);
    }
}

// Função que retorna um filme por gênero
const getByGenre = (request, response)=>{
    const generoRequisitado = request.query.genero.toLowerCase();
    const novaLista = [];

    // array.foreach(elemento=>{logica})
    filmes.forEach(filme => {
        const generoLista = filme.Genre.split(",");

        for (item of generoLista){

            if (item.includes(generoRequisitado) && filme.Genre.includes(item)) {
                novaLista.push(filme)
            }
        }
    });
    response.status(200).send(novaLista);
}

// Exporta cada função criada no controller
module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre
}
const filmes = require("../models/filmes.json"); // Importa o json de filmes

// Função que retorna todos os filmes
const getAll = (request, response)=>{
    response.status(200).send(filmes); // 'send' não constroi json
}

// Função que retorna um filme pelo id
const getById = (request, response)=>{
    const idRequerido = request.params.id; // chave: id
    const idFiltrado = filmes.find(filme => filme.id == idRequerido);

    if (idRequerido == "" || idFiltrado == undefined) {
        response.status(404).json([{
            "mensagem": "id inválido"
        }])
    } else {
        response.status(200).send(idFiltrado);
    }
}

// Função que retorna um filme pelo título
const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase(); // chave: titulo
    const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo));

    if (titulo == "" || filmeFiltrado == undefined) {
        response.status(400).json([{
            "mensagem": "Por favor, digite um título válido"
        }])
    } else {
        response.status(200).send(filmeFiltrado);
    }
}

// Função que retorna um filme por gênero
const getByGenre = (request, response)=>{
    // Guarda a requisição enviada pelo client
    const generoRequerido = request.query.genero.toLowerCase();; // chave: genero

    // Cria um array vazio
    const novaLista = [];

    // Estrutura do foreach (elemento é a unidade)
    // array.foreach(elemento=>{logica})

    // Percorre o json filme
    filmes.forEach(filme => {
        // Usar a 'split' para separar uma string a partir da vírgula
        const generoLista = filme.Genre.split(",");

        // Percorre a lista de generos
        for (genero of generoLista){
            // Se o genero for igual ao genero da requisição
            if (genero.toLowerCase().includes(generoRequerido)) {
                novaLista.push(filme);
            }
        }
    })
    response.status(200).send(novaLista);
}

// Exporta cada função
module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre
}
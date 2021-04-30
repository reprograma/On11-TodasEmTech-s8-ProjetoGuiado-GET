const filmes = require("../models/filmes.json") //chamar o json

const getAll = (request, response) => {       //criar a função getAll
    response.status(200).json(filmes)
}

const getById = (request, response) => {
    const idInput = request.params.idInput
    const idFiltrado = filmes.find(filme => filme.id == idInput)

    if(idFiltrado == undefined || idInput == ''){
        response.status(404).json([{
            'mensagem': 'id inválido. Tente novamente!'
        }])

    }else{
        response.status(200).json(idFiltrado)
    }
}

const getByTitle = (request, response) => {
    const titulo = request.query.titulo.toLowerCase()
    const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo))
    
    if(filmeFiltrado == undefined || titulo == ''){
        response.status(400).json([{
            'mensagem': 'Por favor, digite um título valido :)'
        }])

    }else{
        response.status(200).send(filmeFiltrado)
    }
}

const getByGenre = (resquest, response) => {
    const genre = request.query.genre
    let novaLista =[]

    filmes.forEach(filme =>{ //percorrendo o json de filmes
        let generoLista = filme.Genre.split(",") //transformei string de generos em lista
        for(item of generoLista){//percorri a lista de generos
//SE o item for igual genero da requisição E SE o filme.Genero tiver esse item
            if(item.includes(generoRequisitado) && filme.Genre.includes(item)){
                console.log(filme)
                novaLista.push(filme)
            }
        }
    })

    response.status(200).send(novaLista)
}

module.exports = {   //exportando as funções. Toda vez que criar uma função ela tem que vir aqui dentro
    getAll,
    getById,
    getByTitle,
    getByGenre
}
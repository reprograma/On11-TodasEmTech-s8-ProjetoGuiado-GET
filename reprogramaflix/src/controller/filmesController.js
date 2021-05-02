
const filmes = require("../models/filmes.json")

const getAll = (request, response)=>{

               response.status(200).send(filmes)


}


const getById = (request, response)=>{
    const idRequire = request.params.id 
    response.status(200).json(filmes.find(filme => filme.id == idRequire))
}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo))

    console.log(titulo)
    console.log(filmeFiltrado)

    if(titulo == '' || filmeFiltrado == undefined){
        resquest.status(400).json([{
            "mensagem":"digite um titulo válido"
        }])
    } else {
        response.status(200).send(filmeFiltrado) 
    }
}

const getByGenre = (request, response)=>{
    const genero = request.query.genero.toLowerCase()
    const generoFiltrado = filmes.filter(filme => filme.Genre.toLowerCase().includes(genero))
    if(genero == '' || generoFiltrado == undefined){
        resquest.status(400).json([{
            "mensagem":"digite um gênero válido"
        }])
    } else{
        response.status(200).json(generoFiltrado)
    }
}

module.exports = { 
    getAll,
    getById,
    getByTitle,
    getByGenre
}

    
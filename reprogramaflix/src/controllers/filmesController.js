const filmes = require("../models/filmes.json"); //chamar o json

const getAll = (req, res)=>{ // criando a função getAll
    res.status(200).json(filmes)
}

const getById = (req, res)=>{
    const idRequire = req.params.id //Sempre usar params com o id
    res.status(200).json(filmes.find(filme => filme.id == idRequire))
}

const getByTitle = (req, res)=>{
    const titulo = req.query.titulo.toLowerCase()
    const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo))
    
    console.log(titulo)
    console.log(filmeFiltrado)

    if(titulo == '' || filmeFiltrado == undefined){
        res.status(400).json([{
            "mensagem":"Por favor, digite um titulo válido"
        }])
    } else {
        res.status(200).send(filmeFiltrado) //Me traga qualquer coisa que ele digitou mais ou menos igual
    }
}

const getByGenre = (req, res)=>{
    const genero = req.query.genero.toLowerCase()
    const generoFiltrado = filmes.filter(filme => filme.Genre.toLowerCase().includes(genero))
    if(genero == '' || generoFiltrado == undefined){
        res.status(400).json([{
            "mensagem":"Por favor, digite um genero válido"
        }])
    } else{
        res.status(200).json(generoFiltrado)
    }
}

module.exports = { //exportando cada uma das funções criadas no controller
    getAll,
    getById,
    getByTitle,
    getByGenre
}


const { request, response } = require("express")
const filmes = require("../models/filmes.json")

const  getAll = (request,response)=>{
    response.status(200).send(filmes)
    }
    
const getByTitle = (request,response) =>{
        const titulo = request.query.titulo.toLowerCase()
        const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo))
        
        if (titulo == "" || filmeFiltrado == undefined){
            response.status(400).json([{
                "mensagem":"por favor, digite um titulo válido"
            }])
       } else {        
        response.status(200).send(filmeFiltrado)
       }

    }

const getById = (request,response)=>{
    const id = request.params.id
    let idFiltrado = filmes.find(filme => filme.id == id)
    
    if (idFiltrado == undefined || id == " " ){
        response.status(404).json([{
            "mensagem":"Id incorreto, tente novamente"
        }]) 
    } else { 
        
        response.status(200).json(idFiltrado)
    }
} 



module.exports = {
        getAll, 
        getById,
        getByTitle
    }
const { response } = require("express")
const filmes = require("../models/filmes.json")
//chamar nosso json

const getAll = (request, response)=>{  //criar funcao getall
response.status(200).json(filmes)
}

const getById =(request, response)=>{
    const idRequerido = request.params.idRequerido
    const idFiltrado = filmes.find(filme => filme.id == idRequerido)
console.log(idFiltrado)

    if (idFiltrado == undefined || idRequerido == " ") {
        response.status(404).json([{
            "mensagem" : "por favor digite uma ID válida"
        }])    
    } else {
        response.status(200).send(idFiltrado)
        }
}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const filmeFiltrado = filmes.find(filme => filme.Title.toLocaleLowerCase().includes(titulo))
    if(titulo == "" || filmeFiltrado == undefined){
        response.status(400).json([{
            "mensagem" : "por favor digite um titulo válido"
        }])      
    } else {
    response.status(200).send(filmeFiltrado)
    }
}

const getByGenre = (request, response)=>{
    const generoRequisitado = request.query.genero
    let novaLista =[]
   
    filmes.forEach(filme =>{//percorrendo o json de filmes
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

module.exports = { //exportando as funcões
    getAll, 
    getById,
    getByTitle,
    getByGenre
}



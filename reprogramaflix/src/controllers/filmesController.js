const filmes = require("../models/filmes.json") //chamr o nosso json

const getAll = (request, response)=>{ //criar a função getALL
    response.status(200).send(filmes)

}

const getById =(request, response)=>{
    const idRequerido = request.params.idRequerido
    let idFiltrado = filmes.find(filme => filme.id == idRequerido)
    if(idFiltrado == "" || idFiltrado == undefined){
        response.status(404).json([{
            "mensagem": "por favor, digite um id válido"
        }])
        


    }else{
        response.status(200).json(idFiltrado)

    }

    
}

 const getByTitle = (request,response)=> {
     const titulo = request.query.titulo.toLowerCase()
     const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo))
     console.log(titulo)
     console.log(filmeFiltrado)

     if(titulo == "" || filmeFiltrado == undefined){
         response.status(400).json([{
             "mensagem": "por favor, digite um titulo válido"
         }])
     } else {
        response.status(200).send(filmeFiltrado)

     }
 }

module.exports = { // exportando as funções 
    getAll,
    getById,
    getByTitle
}
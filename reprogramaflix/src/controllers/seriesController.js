const series = require("../models/series.json") //chamar nosso json

const getAll = (request, response)=>{ //criar função getAll
    response.status(200).send(series)
}

module.exports = { // exportando as funções 
    getAll
}

const getById =(request, response)=>{
    const idRequerido = request.params.idRequerido
    let idFiltrado = series.find(serie => serie.id == idRequerido)
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
     const serieFiltrado = series.find(serie => serie.title.toLowerCase().includes(titulo))
     console.log(titulo)
     console.log(serieFiltrado)

     if(titulo == "" || serieFiltrado == undefined){
         response.status(400).json([{
             "mensagem": "por favor, digite um titulo válido"
         }])
     } else {
        response.status(200).send(serieFiltrado)

     }
 }

 const getByGenre = (request, response)=>{
    const genero = request.query.genero;
    const generoFiltrado = series.filter(serie => serie.genre.includes(genero));

    if(genero == "" || generoFiltrado == undefined){
        response.status(400).json({
            "mensagem": "insira um gênero válido"
        })
    }else  {
        response.status(200).send(generoFiltrado);
    }   
            }
    

module.exports = { // exportando as funções 
    getAll,
    getById,
    getByTitle,
    getByGenre
}
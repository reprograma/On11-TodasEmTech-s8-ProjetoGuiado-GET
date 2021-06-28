const series = require ("../models/series.json")

const getAll = (resquest, response)=>{
    response.status(200).send(series)

}
const getById =(request,response) =>{
    const id = request.params.id
    const idFiltrado = series.find(serie => serie.id == id)
   

    if(idFiltrado == undefined || id == "" ){
        response.status(404).json([{
            "mensagem":"Por favor, digite um ID válido!"
        }])
    }else{
        response.status(200).json(idFiltrado)
    }
}

const getByTitle = (request, response) =>{
    const title = request.query.title.toLowerCase()
    const serieFiltrada =  series.find(serie => serie.title.toLowerCase().includes(title))


    if(serieFiltrada == undefined || title == ""){
        response.status(400).json([{
            "mensagem":"Por favor, digite um titulo válido!"
        }])
    }else{
     response.status(200).json(serieFiltrada)
    }
    
}
const getByGenre = (request, response) =>{
    const genre = request.query.genre 
    let novaLista = []
    series.forEach(serie => {
        for(item of genre){
            if(item.includes(genre) && serie.genre.includes(item)){
              novaLista.push(serie)
            }
        }
    });

    if(genre == undefined || genre == ""){
        response.status(400).json([{
            "mensagem":"Por favor, digite um titulo válido!"
        }])
    }else{
     response.status(200).json(novaLista)
    }
}

module.exports = {
    getAll, getById, getByTitle, getByGenre
}
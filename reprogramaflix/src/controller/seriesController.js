const series = require("../models/series.json")

const getAll = (request, response)=>{
    response.status(200).send(series)
}
const getById = (request, response)=>{
    const idRequirido = request.params.id
    let idFiltrado = series.find(serie => serie.id == idRequirido)
    if(idFiltrado == undefined || idRequirido == " "){
        response.status(404).json([{
            "mensagem":"id não existente"
        }])
    }else{
    response.status(200).json(idFiltrado)
    }
}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const serieFiltrado = series.find(serie => serie.title.toLowerCase().includes(titulo))
    response.status(200).send(serieFiltrado)

    if( titulo == " " || serieFiltrado == undefined){
        response.status(400).json([{
            "mensagem":"por favor, digite um título válido"
        }])
    } else {
        response.status(200).send(serieFiltrado)
    }


}

const getBygenre = (request, response)=>{
    const generoRequisitado = request.query.genero
    const novaLista = []
    // array.foreach(elemento=>{logica})
    series.forEach(serie =>{ // percorrendo o json de series
        //string que esta em genre e separa a partir da virgula como referencia
        let generoLista = serie.genre
        for(item of generoLista){ // percorri a lista de generos
           // Se o item for igual genero 
            if(item.includes(generoRequisitado) && serie.genre.includes(item) ){
                
                novaLista.push(serie)
            }
        }
    })
response.status(200).send(novaLista)
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getBygenre
}
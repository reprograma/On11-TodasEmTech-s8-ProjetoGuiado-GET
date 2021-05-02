const filmes = require("../models/filmes.json")

const getAll = (request, response)=>{
    response.status(200).send(filmes)
}
const getById = (request, response)=>{
    const idRequirido = request.params.id
    let idFiltrado = filmes.find(filme => filme.id == idRequirido)
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
    const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo))
    response.status(200).send(filmeFiltrado)

    if( titulo == " " || filmeFiltrado == undefined){
        response.status(400).json([{
            "mensagem":"por favor, digite um título válido"
        }])
    } else {
        response.status(200).send(filmeFiltrado)
    }


}

const getBygenre = (request, response)=>{
    const generoRequisitado = request.query.genero
    // array.foreach(elemento=>{logica})
    filmes.forEach(filme =>{ // percorrendo o json de filmes
        //string que esta em genre e separa a partir da virgula como referencia
        let generoLista = filme.Genre.split(",")
        for(item of generoLista){ // percorri a lista de generos
           // Se o item for igual genero 
            if(item.includes(generoRequisitado) && filme.Genre.includes(item) ){
                console.log(filme)
                novaLista.push(filme)
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
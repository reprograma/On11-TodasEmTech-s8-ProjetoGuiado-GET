const series = require("../models/series.json") //pegando o jason

//funcao que vai enviar os dados da request

const getAll = (request, response)=>{
    response.status(200).send(series)
}
const getById = (request, response)=>{
    const idRequerido = request.params.id //lado direito é definido por nós
    let idFiltrado = series.find(serie => serie.id == idRequerido)

    if(idFiltrado == undefined || idRequerido == " "){
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

    if(titulo == "" || serieFiltrado == undefined){
        response.status(400).json([{
            "mensagem":"por favor, digite um titulo válido"
        }])
    } else {
        response.status(200).send(serieFiltrado)
    }
}

const getByGenre = (request, response)=>{
    const generoRequisitado = request.query.genero
    let novaLista =[]
   
    series.forEach(serie =>{//percorrendo o json de series
        for(item of serie.genre){//percorri a lista de generos
            //SE o item for igual genero da requisição E SE o serie.Genero tiver esse item
            if(item.toLowerCase().includes(generoRequisitado) && serie.genre.includes(item)){
                console.log(serie)
                novaLista.push(serie)
            }
        }
    })

    response.status(200).send(novaLista)
}



module.exports ={
    getAll, //agora getAll saiu do escopo e pode ser acessado por todas as partes do projeto.
    getById,
    getByTitle,
    getByGenre
    
}


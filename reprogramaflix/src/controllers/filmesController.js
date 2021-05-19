const filmes = require("../models/filmes.json")//chama o json

const getAll/*pega a galera toda*/ = (request, response)=>{//criando a função getAll
    response.status(200).json(filmes)
} 

const getById= (request, response)=>{//chamando pela id
const idRequisitado = request.params.idRequisitado
const idFiltrado = filmes.find(filme => filme.id == idRequisitado)

    if(idFiltrado == undefined || idRequisitado == ""){
        response.status(400).json([{
            "mensagem": "por favor, insira o Id Correto"
        }])
    }else{
        response.status(200).json(idFiltrado)
}
}

const getByTitle = (request, response) =>{//pesquisa que pode procurar mesmo o titulo estando meio errado
    const tituloRequisitado = request.query.tituloRequisitado.toLowerCase()//toLowerCase é para aceitar o nome por letras minusculas
    const filmeFiltrado = filmes.find(filme=> filme.Title.toLowerCase().includes(tituloRequisitado))//criei uma const com a requisicao
    
    
    console.log(tituloRequisitado)
    console.log(filmeFiltrado)
   
    if(filmeFiltrado == undefined || tituloRequisitado == ""){
        response.status(400).json([{
            "mensagem": "por favor, digite um titulo de filme válido"
        }])
    }else{

    response.status(200).json(filmeFiltrado) //usei a const no json para deixar o codigo mais limpo
    }
}

module.exports = {// exportamos essa funcao para routes, retorna cada uma das funcoes criadas dentro do controller
    getAll,
    getById,
    getByTitle
}
const { response, request } = require("express")
const filmes = require("../models/filmes.json") // chamar nosso json

const getAll = (request, response)=>{    //criar função getALl
   response.status(200).send(filmes)
}

const getById = (request, response)=>{
   const idRequisitado = request.params.idRequisitado
   let idFiltrado = filmes.find(filme => filme.id == idRequisitado)
   if ( idFiltrado == undefined || idRequisitado == "" ){
      response.status(404).json([{
         "mensagem" : "por favor, insira um id corrreto"
      }])
   } else{
      response.status(200).send(idFiltrado)
   }

}


const getByTitle = (request, response) => {
   const titulo = request.query.titulo.toLowerCase()
   const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo))
   
   console.log(titulo)
   console.log(filmeFiltrado)

   if(titulo == "" || filmeFiltrado == undefined){
      response.status(400).json([{
         "mensagem" : "por favor, digite um titulo valido"
      }])
   } else{
      response.status(200).send(filmeFiltrado)
   }

}

const getByGenre = (request, response) =>{
   const generoRequisitado = request.query.genero
   //ARRAY.forEach(elemento =>(lógica))
   filmes.forEach(filme =>{
                        //string que esta em Gere e separa usando a virgla como refenrencia
      let generoLista = filme.Genre.split(",") //transformei string de generos em lista
      for (item of generoLista){ // percorrendo a lista de gêneros
         //console.log(item)
         //SE o itemincluir/for igual ao genero da requisição  E SE o filme.Genero tiver esse item
         if(item.includes(generoRequisitado) && filme.Genre.includes(item)){
            console.log(filme)
            novaLista.push(filme)
         }
      }
   })
   response.status(200).send(novaLista)
}


module.exports = {   //exportando as funções
   getAll,
   getById,
   getByTitle,
   getByGenre
}
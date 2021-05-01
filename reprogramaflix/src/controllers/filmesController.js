<<<<<<< HEAD
const filmes = require("../models/filmes.json");

const getAll = (req, res) => { //criando função getAll
  res.status(200).send(filmes);
};

const getById = (req, res) => {
  const id = req.params.id;
  const idFiltrado = filmes.find(filme => filme.id == id)
    if(idFiltrado == undefined || id == ""){
      res.status(404).json([{
        "mensagem": "id não encontrado"
      }])
    } else {
    res.status(200).send(idFiltrado);
    }
};

const getByTitle = (req, res) => {
  const title = req.query.title.toLowerCase();
  const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(title));
 
  if(filmeFiltrado == undefined || title == "" || title == " "){
    res.status(400).json([{
      "mensagem": "Por favor, digite um título válido"
    }])
  } else {
    res.status(200).send(filmeFiltrado);
  }
  
};

module.exports = { //exportando as funções
  getAll,
  getById,
  getByTitle
=======
const filmes = require("../models/filmes.json") //chamar nosso json

const getAll = (request, response)=>{ //criar função getAll
    response.status(200).send(filmes)
}
const getById = (request, response)=>{
    const idRequerido = request.params.id
    let idFiltrado = filmes.find(filme => filme.id == idRequerido)

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
    const filmeFiltrado = filmes.find(filme => filme.Title.toLowerCase().includes(titulo))

    if(titulo == "" || filmeFiltrado == undefined){
        response.status(400).json([{
            "mensagem":"por favor, digite um titulo válido"
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

module.exports = { //exportando as funções
    getAll,
    getById,
    getByTitle,
    getByGenre
>>>>>>> 168269ca20a26f32ad88d5ebf6932a3ea293b189
}
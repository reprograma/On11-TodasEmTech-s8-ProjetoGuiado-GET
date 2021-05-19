const series = require("../models/series.json");

// Função que retorna todas as series
const getAll = (request, response)=>{
    response.status(200).send(series);
}

// Função que retorna uma serie pelo id
const getById = (request, response)=>{
    const idRequerido = request.params.id;
    const idFiltrado = series.find(serie => serie.id == idRequerido);

    if (idRequerido == "" || idFiltrado == undefined) {
        response.status(400).json([{
            "mensagem": "Por favor, digite um id inválido"
        }])
    } else {
        response.status(200).send(idFiltrado);
    }
}

// Função que retorna uma serie pelo título
const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase();
    const serieFiltrada = series.find(serie => serie.title.toLowerCase().includes(titulo));

    if (titulo == "" || serieFiltrada == undefined) {
        response.status(400).json([{
            "mensagem": "Por favor, digite um título válido"
        }])
    } else {
        response.status(200).send(serieFiltrada);
    }
}

// Função que retorna serie pelo genero
const getByGenre = (request, response) =>{
    const generoRequisitado = request.query.genero.toLowerCase();
    
    const novaLista = [];
    
    series.forEach(serie => {
       const generoLista = serie.genre

       for (genero of generoLista){
          if(genero.toLowerCase().includes(generoRequisitado) && serie.genre.includes(genero)){
            novaLista.push(serie);
          }
        }
    });

    response.status(200).send(novaLista)
 }

// Função que retorna uma serie por gênero
module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre
}
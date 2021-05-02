const series = require("../models/series.json");

// Função que retorna todas as series
const getAll = (request, response)=>{
    response.status(200).send(series);
}

// Função que retorna uma serie pelo id
const getById = (request, response)=>{
    const idRequerido = request.params.idReq;
    const idFiltrado = series.find(serie => serie.id == idRequerido);

    if (idRequerido == null || idFiltrado == undefined) {
        response.status(400).json([{
            "mensagem": "id inválido"
        }])
    } else {
        response.status(200).send(idFiltrado);
    }
}

// Função que retorna uma serie pelo título
const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase();
    const serieFiltrada = series.find(serie => serie.title.toLowerCase().includes(titulo));

    if (titulo == null || serieFiltrada == undefined) {
        response.status(400).json([{
            "mensagem": "Por favor, digite um título válido"
        }])
    } else {
        response.status(200).send(serieFiltrada);
    }
}

// Função que retorna serie pelo genero
const getByGenre = (request,response) =>{
    const generoRequisitado = request.query.genero

    series.forEach(serie => {
       const generoLista = serie.genre

       for (item of generoLista){

          if(item.includes(generoRequisitado) && serie.genre.includes(item)){
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
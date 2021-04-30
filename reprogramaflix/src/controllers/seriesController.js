const series = require("../models/series.json");

getAll = (request, response) => {
    response.status(200).send(series);
};

getById = (request, response) => {
    const id = request.params.id;
    const idFiltrado = series.find(serie => serie.id == id);

    if(idFiltrado == undefined || id == " "){
        response.status(404).json([{ 
            "mensagem": "Id não encontrado"
        }]);
    }else{
        response.status(200).send(idFiltrado);
    };  
};

const getByTitle = (request, response) => { 
    const titulo = request.query.titulo.toLowerCase();
    const tituloFiltrado = series.find(serie => serie.title.toLowerCase().includes(titulo));

    if(titulo == "" || tituloFiltrado == undefined){
        response.status(400).json([{
            "mensagem": "Por favor informe um título válido"
        }]);
    }else{
        response.status(200).send(tituloFiltrado);
    };    
};

const getByGenre = (request, response) => {
    const genero = request.query.genero;
    const generoFiltrado = series.filter(serie => serie.genre.includes(genero));

    if(genero == "" || generoFiltrado == undefined){
        response.status(400).json([{
            "mensagem": "Por favor inrira um gênero válido"
        }]);
    }else{
        response.status(200).send(generoFiltrado);
    }   
}

module.exports ={
    getAll, 
    getById,
    getByTitle,
    getByGenre
}
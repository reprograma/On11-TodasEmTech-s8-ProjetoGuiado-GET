const series = require("../models/series.json");

const getAllSeries = (req, resp) => {
    resp.status(200).send(series);
}

const getSeriesById = (req, resp) => {
    const idRequerido = req.params.id;
    let idFiltrado = series.find(serie => serie.id == idRequerido);

      if (idFiltrado == undefined || idRequerido == "") {
          resp.status(404).json([{
              "mensagem": "ID não encontrado"
          }])
      } else {
        resp.status(200).json(idFiltrado);
    }
}


const getSerieBytitle = (req, resp) => {
    const title = req.query.title.toLowerCase();
    const serieFilter = series.find(serie => serie.title.toLowerCase().includes(title));

    if(title == "" || serieFilter == undefined) {
        resp.status(400).json([{
            "message": "Insira um título de Série Válido"
        }])
    }
    else {
        resp.status(200).send(serieFilter);
    }
}

const getSeriesByGenre = (req, resp) => {
    const genreRequested = req.query.genre;
    let arrayNewGenre = [];

    series.forEach(serie => {
        let listOfGenre = serie.genre;
        for (item of listOfGenre) {
            if(item.includes(genreRequested) && serie.genre.includes(item)) {
                arrayNewGenre.push(serie);
            }            
        }
    })
     resp.status(200).send(arrayNewGenre)
}



module.exports = {
    getAllSeries,
    getSeriesById,
    getSerieBytitle,
    getSeriesByGenre
}

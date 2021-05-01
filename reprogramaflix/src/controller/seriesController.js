const series = require("../models/series.json");


const getAll = (req, res) => res.status(200).send(series);

const getById = (req, res) => {
    const id = req.params.id;
    const serie = series.find(serie => serie.id == id);
    if (serie && id.length > 0) res.status(200).json(serie);
    else res.status(404).send({'mensagem' : 'id da serie não encontrado'});
}

const getByTitle = (req, res) => {
    const title = req.query.titulo.toLowerCase();
    const serie = series.find(serie => serie.title.toLowerCase().includes(title));

    if (title != " " && title.length > 0 && serie) res.status(200).json(serie);
    else res.status(400).json({ "mensagem" : "desculpa, não conseguimos achar"});
}

const getByGener = (req, res) => {
    const genre = req.query.genero.toLowerCase();
    const serie = series.filter(serie => {
        let generSeach = serie.genre
        .find(genero => genero.toLowerCase().includes(genre));
        if (generSeach) return serie;
    })
    
    if (serie.length==0 || genre == " ")
    res.status(400).json({ "mensagem" : "desculpa, não conseguimos achar"});
    else res.status(200).json(serie)
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGener,
}


const series = require("../models/series.json");

const getAll = (req, res) => {
  res.status(200).json(series);
};

const getById = (req, res) => {
  const id = req.params.id;
  const filteredId = series.find(serie => serie.id == id);
    if(filteredId == undefined || id == ""){
      res.status(404).json([{
        "message": "id not found"
      }])
    } else {
      res.status(200).json(filteredId);
    }
}

const getByTitle = (req, res) => {
  const title = req.query.title.toLowerCase();
  const filteredSerie = series.find(serie => serie.title.toLowerCase().includes(title));
  
  if(filteredSerie == undefined || title == " " || title == ""){
    res.status(400).json([{
      "message": "Por favor, digite um título válido"
    }])
  } else {
    res.status(200).json(filteredSerie);
  }
}

const getByGenre = (req, res) => {
  const genreRequest = req.query.genre;
  let newList = [];
        series.forEach(serie => {
          let generoList = serie.genre;
              for(item of generoList){
                if(item.includes(genreRequest) && generoList.includes(item)){
                   console.log(serie);
                   newList.push(serie);
                }
      }
  })
  res.status(200).json(newList);
}
  

module.exports = {
  getAll,
  getById,
  getByTitle,
  getByGenre
}

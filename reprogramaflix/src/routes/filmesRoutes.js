const filmesController = require("../controllers/filmesController")
const express = require("express"); //chamando express

//vamos executar somente a função Router dentro do express (pra facilitar o desempenho da api)
const router = express.Router();

//continuação da rota principal
router.get("/todos", filmesController.getAll); //configurando função de listar todos os filmes
router.get("/title", filmesController.getByTitle); // configurando função
router.get("/:id", filmesController.getById); // configurando função de procurar filme por id;
//o parâmetro de rota :id tem que vir após todos os query params

module.exports = router;
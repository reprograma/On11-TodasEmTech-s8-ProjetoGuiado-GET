<<<<<<< HEAD
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
=======
const controller  = require("../controllers/filmesController")//chama o controler

const express = require("express")//chamando o express 
const router = express.Router()//executando Router

router.get("/todos", controller.getAll)//configurando continuação da rota e dizendo q ela vai usar a função getAll que esta no controller
router.get("/title", controller.getByTitle)
router.get("/genre", controller.getByGenre)
router.get("/:id", controller.getById)


module.exports = router //exportando o router
>>>>>>> 168269ca20a26f32ad88d5ebf6932a3ea293b189

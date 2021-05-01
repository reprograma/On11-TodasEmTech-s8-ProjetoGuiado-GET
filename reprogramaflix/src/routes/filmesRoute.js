const controller = require("../controllers/filmesController"); // chama o controller

const express = require("express"); //chamando o express
const router = express.Router(); // executando o Router

router.get("/allFilmes", controller.getAll) //configurando a rota secundaria executando a função getAll que está no controller

router.get("/title", controller.getByTitle)

router.get("/genre", controller.getByGenre)

router.get("/:id", controller.getById)


module.exports = router; //exportando o router
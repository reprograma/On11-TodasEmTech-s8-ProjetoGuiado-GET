const controller  = require("../controllers/series.Controller") //chama a logica

const express = require("express") //chama o express
const router = express.Router() //executa o Router(função do express)

router.get("/todos", controller.getAll) // configura a continuação da rota e manda usar a funçao getAll
router.get("/title", controller.getByTitle) // função que chama o getByTitle
router.get("/genre", controller.getByGenre)
router.get("/:id", controller.getById) // função do getById

module.exports = router //exportando o router de dentro do controller para geral
const controller = require("../controllers/filmesController") //chama o controller

const express = require("express") //chamando o express
const router = express.Router() //executando Router

router.get("/todos", controller.getAll) //configurando continuação da rota e dizendo q ela vai usar a função getAll que está no controller
router.get("/title", controller.getByTitle) 
router.get("/genre", controller.getByGenre)
router.get("/:id", controller.getById)


module.exports = router //exportando o router

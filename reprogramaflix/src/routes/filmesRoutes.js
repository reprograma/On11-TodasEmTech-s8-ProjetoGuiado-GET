const controller = require("../controllers/filmesController.js")  //chama o controller

const express = require("express") //chama o express
const router = express.Router()  // executa apenas as funções de router dentro do express

router.get("/todos", controller.getAll) // configurando a continação das rotas e dizendo que vai usar a função get all
router.get("/title", controller.getByTitle)
router.get("/genre", controller.getByGenre)
router.get("/:idRequisitado", controller.getById)



module.exports = router //exportando o router 
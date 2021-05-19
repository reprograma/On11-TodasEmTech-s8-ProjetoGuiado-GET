const controller = require("../controllers/filmesController")//requerir o controller


const express = require("express")//requerir o express
const router = express.Router()//(executando) uma nova funcao Router


router.get("/todos", controller.getAll)// criamos a continuacao da rota, pedindo pra utilizar a funcao getAll que esta dentro do nosso controller
router.get("/title", controller.getByTitle)
router.get("/:idRequisitado", controller.getById)//dois pontos pois é um path params
module.exports = router //exportando o router
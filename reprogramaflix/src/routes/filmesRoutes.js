const controller = require("../controllers/filmesController") // chamar o controllaer

const express = require("express") // chamando express
const router = express.Router() // executando Router

router.get("/todos", controller.getAll) //configurando continuação da rota e dizendo que ela vai usar a função getALL
router.get("/title", controller.getByTitle)
router.get("/:idRequerido", controller.getById)
module.exports = router // exportando o router
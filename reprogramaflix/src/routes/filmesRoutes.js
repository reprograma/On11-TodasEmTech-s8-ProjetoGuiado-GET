const controller = require("../controllers/filmesController") //chamando o controller

const express = require("express") //chamando novamente o express
const router = express.Router() //executando Router, que é uma função do próprio express

//configurando continuação da rota e dizendo que ela vai usar a lógica dentro de controller dentro da função getAll
router.get("/todos", controller.getAll) 
router.get("/title", controller.getByTitle)
router.get("/:idInput", controller.getById) //configrando a continuação da rota, agora de buscar por id

module.exports = router //exportando o router
const controller =  require("../controllers/filmesControllers")
//chama o controller

const express = require("express")
//chamando o express

const router = express.Router()
// executando Router que é uma funcao do express

router.get("/todos", controller.getAll)
router.get("/title", controller.getByTitle)
router.get("/genre", controller.getByGenre)

//configurando continuação da rota e dizendo que ela vai usar a funcao getall - funcao gett que ta dentro do controller
router.get("/:idRequerido", controller.getById)
//lembrar de deixar o path params no final, senao nao roda o resto abaixo



module.exports = router  //exportando o router


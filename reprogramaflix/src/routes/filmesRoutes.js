const controller = require("../controllers/filmesController")

const express = require("express") 

const router = express.Router() // chamando o Router do Express

router.get("/todos", controller.getAll) //configurando as continuações da rota principal que será a função getAll, em controller
router.get("/title", controller.getByTitle)
router.get("/genero", controller.getByGenre)
router.get("/:id", controller.getById)


module.exports = router //exportando a const router;
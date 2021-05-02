const controller = require("../controllers/filmesController");
const express = require("express")

const router = express.Router() //executa somente as funções de router no express

router.get("/todos", controller.getAll)
router.get("/title", controller.getByTitle) //query paramaters deve sempre vim antes de path params
router.get("/genre", controller.getByGenre)
router.get("/:id", controller.getById)
module.exports = router
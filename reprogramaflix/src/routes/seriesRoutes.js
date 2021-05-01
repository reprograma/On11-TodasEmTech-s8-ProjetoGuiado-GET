const controller = require("../controllers/seriesController"); //chamando o controller

const express = require("express"); //executando o express
const router = express.Router(); //executando o Router

router.get("/todos", controller.getAll);
router.get("/title", controller.getByTitle);
router.get("/genre", controller.getByGenre);
router.get("/:id", controller.getById);

module.exports = router; //exportando o router
const controller = require("../controllers/seriesController");

const express = require("express");
const router = express.Router();

router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle); 
router.get("/:genero", controller.getByGenre);
router.get("/:idReq", controller.getById); // A ordem influência por causa do id

module.exports = router;
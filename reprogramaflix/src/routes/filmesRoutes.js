const controller = require("../controllers/filmesController");

const express = require("express");
const router = express.Router();

// Continuação das rotas
router.get("/all", controller.getAll);
router.get("/title", controller.getByTitle); // A ordem influência por causa do id
router.get("/genre", controller.getByGenre);
router.get("/:id", controller.getById);

module.exports = router;
const controller = require("../controllers/filmesController");

const express = require("express");
const router = express.Router();

// Continuação das rotas
router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle); // A ordem influência por causa do id
router.get("/:idReq", controller.getById);

module.exports = router;
const controller = require("../controllers/seriesController");

const express = require("express");
const router = express.Router();

router.get("/all", controller.getAll);
router.get("/title", controller.getByTitle); 
router.get("/:genre", controller.getByGenre);
router.get("/:id", controller.getById); // A ordem influência por causa do id

module.exports = router;
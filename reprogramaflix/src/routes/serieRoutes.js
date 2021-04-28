const controller = require("../controllers/serieController");

const express = require("express");
const router = express.Router();

router.get("/todas", controller.getAll)
router.get("/titulo", controller.getByTitle)
router.get("/:id", controller.getById)

module.exports = router;
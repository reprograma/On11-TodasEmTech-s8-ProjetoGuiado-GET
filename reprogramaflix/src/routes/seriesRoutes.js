const seriesController = require("../controllers/seriesController");
const express = require ("express");

const router = express.Router();

router.get("/all", seriesController.getAll);
router.get("/title", seriesController.getByTitle);
router.get("/genre", seriesController.getByGenre);
router.get("/:id", seriesController.getById);


module.exports = router;
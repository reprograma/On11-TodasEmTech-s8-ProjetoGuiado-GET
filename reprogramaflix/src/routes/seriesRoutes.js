const seriesController = require("../controllers/seriesController");
const express = require ("express");

const router = express.Router();

router.get("/todos", seriesController.getAll);

module.exports = router;
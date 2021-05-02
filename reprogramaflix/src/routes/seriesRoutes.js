const controllerSeries = require("../controllers/seriesController");
const express = require("express");

const routerSeries = express.Router()

routerSeries.get("/todas", controllerSeries.getAllSeries);
routerSeries.get("/title", controllerSeries.getByTitleSeries);
routerSeries.get("/genre", controllerSeries.getByGenreSeries)
routerSeries.get("/:id", controllerSeries.getByIdSeries);

module.exports = routerSeries;

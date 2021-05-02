const express = require("express");
const app = express();


const filmes = require("./routes/filmesRoutes");
app.use("/filmes", filmes);

const series = require("./routes/seriesRoutes");
app.use("/series", series);

module.exports = app;

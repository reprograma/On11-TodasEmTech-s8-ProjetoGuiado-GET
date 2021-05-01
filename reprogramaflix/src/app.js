const express = require('express');
const app = express();

const filmes = require("./routes/filmeRoutes");
const series = require("./routes/serieRoutes");

app.use("/filmes", filmes);
app.use("/series", series);


module.exports = app;

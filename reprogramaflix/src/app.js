const express = require("express"); //chama o express
const app = express(); //executar express

const filmes = require("./routes/filmesRoutes");
const series = require("./routes/seriesRoutes"); //chamando todas as rotas

app.use("/filmes", filmes); //colocando a rota raiz
app.use("/series", series);

module.exports = app; //exportando app
const express = require("express"); //chama o express
const app = express(); // execução do express

const filmes = require("./routes/filmesRoute");//chamando todas as rotas
const series = require("./routes/seriesRouter");

app.use("/filmes", filmes) //configura a rota raiz
app.use("/series", series)

module.exports = app; // exportar o app para ser usado no server
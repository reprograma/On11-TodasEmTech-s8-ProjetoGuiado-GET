const express = require("express"); // Importando o express
const app = express(); // Executando o express

// Chamando a continuação das rotas
const filmes = require("./routes/filmesRoutes");
const series = require("./routes/seriesRoutes");

// Rota raíz
app.use("/filmes", filmes);
app.use("/series", series);

module.exports = app;
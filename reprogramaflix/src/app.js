const express = require("express") // chama o express
const app = express() // executar express

const filmes = require("./routes/filmesRoutes") // chamando todas as rotas
const series = require("./routes/seriesRoutes") // chamando todas as rotas




app.use("/filmes", filmes) // colocando a rota raiz
app.use("/series", series) // colocando a rota raiz

module.exports = app // exportando app
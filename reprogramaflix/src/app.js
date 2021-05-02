const express = require("express") // chama o express
const app = express() // executar o express

const filmes = require("./routes/filmesRoutes") //chamando todas as rotas
const series = require("./routes/seriesRoutes")

app.use("/filmes", filmes)  

app.use("/series", series)

module.exports = app
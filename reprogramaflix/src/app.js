const express = require("express") //
const app = express()// exec o express
const filmes = require("./routes/filmesRoutes")//  chamando as rotas
app.use("/filmes", filmes) // colocando a rota raiz

const series = require("./routes/seriesRoutes")//  chamando as rotas
app.use("/series", series)



module.exports = app // exportando app



















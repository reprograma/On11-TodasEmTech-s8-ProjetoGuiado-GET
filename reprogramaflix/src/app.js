const express = require("express") //
const app = express()// exec o express
const filmes = require("./routes/filmesRoutes")//  chamando as rotas
app.use("/filmes", filmes) // colocando a rota raiz

module.exports = app // exportando app



















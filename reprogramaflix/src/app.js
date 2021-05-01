const express = require("express") //chama o express
const app = express() //executar express

const series = require("./routes/seriesRoutes") //chamando todas as rotas

app.use("/series", series) //colocando a rota raiz

module.exports = app //exportando app
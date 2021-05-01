const app = express() //executar express

const filmes = require("./routes/filmesRoutes") //chamando todas as rotas
const series = require("./routes/seriesRoutes")// call all routes of series

app.use("/filmes", filmes) //colocando a rota raiz
app.use("/series", series)//call root

module.exports = app //exportando app


const express = require("express")//chama o express
const app = express()//executa o express

const filmes = require("./routes/filmesRoutes")//chama todas rotas
const series = require("./routes/seriesRoutes")//chama todas as rotas serie
app.use("/filmes", filmes)//usa o app.use, configura a raiz e diz que ela vai usar a rota acima
app.use("/series", series )// usa o app.use, configura a raiz e diz que ela vai usar a rota seriesRoutes
module.exports = app //exporta(mandando embora) TUDO QUE TIVER APP. pra mandar pro nosso server

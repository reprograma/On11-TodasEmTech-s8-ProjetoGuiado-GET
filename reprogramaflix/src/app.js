<<<<<<< HEAD
const express = require("express")
const app = express();

const filmes = require("./routes/filmesRoutes");
const series = require ("./routes/seriesRoutes");
app.use("/filmes", filmes);
app.use("/series", series);

module.exports = app;
=======
const express = require("express") //chama o express
const app = express() //executar express

const filmes = require("./routes/filmesRoutes") //chamando todas as rotas

app.use("/filmes", filmes) //colocando a rota raiz

module.exports = app //exportando app
>>>>>>> 168269ca20a26f32ad88d5ebf6932a3ea293b189

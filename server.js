const filmes = require("./models/filmes.json")
const series = require("./models/series.json")


const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json([{
        "mensagem" : "Oi, tô aqui Analu. Hello World!"
    }])
})
app.get("/filmes", (request,response)=>{
    response.status(200).send(filmes)
})

app.get("/series", (request,response)=>{
    response.status(200).json(series)
})

app.listen(8080, ()=>{
    console.log("Aqui fazendo a atividade da semana 8 aqui na porta 8080")

})
//const filmes = require("./models/filmes.json")
//const series = require("./models/series.json")
const app = require("./src/app")

//const express = require("express")
//const app = express()

//app.get("/", (request, response)=>{
//    response.status(200).json([{
//        "mensagem":"Salve,mundão!"
//    }])
//})

//////app.get("/filmes", (request, response)=>{
//    response.status(200).send(filmes)
//})

//app.get("/series", (request, response)=>{
//    response.status(200).json(series)})



app.listen(8080, ()=>{console.log("projeto semana 8 na porta 8080")})



// app.listen(3535, ()=>console.log("servidor para o lar rodando na porta 3535")
// const filmes = require("./models/filmes.json")
// const series = require("./models/series.json")

//const express = require("express")
//const app = express()


//INFORMACÕES ACIMA ESTÃO NA ApplicationCache.J


// app.get("/", (request, response)=>{
//    response.status(200).json({
//       "mensagem" : "salve, mundão"
//    })
// })


// app.get("/filmes", (request, response)=>{
//    response.status(200).send(filmes)
// })

// app.get("/series", (request, response)=>{
//    response.status(200).json(series)
// })


const app = require("./src/app")

app.listen(9091, ()=>{
   console.log("Tá funcionando na porta 8080")
})
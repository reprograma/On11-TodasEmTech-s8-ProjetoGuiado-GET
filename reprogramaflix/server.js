const filmes = require("./models/filmes.json")
const series = require("./models/series.json")

const express = require("express")
const { request, response } = require("express")
const app = express()

app.get('/', (request, response)=>{
    response.status(200).json({
        "mensagem": "Oi mulher!"
    })
})

//retornar todos os filmes
app.get('/filmes', (request, response)=>{
    response.status(200).json(filmes)
})

//retornar um filme pelo id


//retornar um filme pelo nome


//retornar um filme pelo genêro


//retornar todas as séries
app.get('/series', (request, response)=>{
    response.status(200).json(series)
})

app.listen(5050, ()=>{
    console.log('Servidor rodando na porta 5050')
})

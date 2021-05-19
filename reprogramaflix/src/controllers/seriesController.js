const series = require("../models/series.json")//chama o json
const getAll = (request, response) => {
    response.status(200).json(series)
}

const getById= (request, response)=>{//chamando pela id
    const idRequisitado = request.params.id
    const idFiltrado = series.find(serie => serie.id == idRequisitado)
    
        if(idFiltrado == undefined || idRequisitado == ""){
            response.status(400).json([{
                "mensagem": "por favor, insira o Id da serie Corretamente"
            }])
        }else{
            response.status(200).json(idFiltrado)
    }
    }

const getByTitle = (request, response) =>{
    const tituloRequisitado = request.query.tituloRequisitado.toLowerCase()
  
    const serieFiltrada = series.find(serie => serie.title.toLowerCase().includes(tituloRequisitado))

    if(serieFiltrada == undefined || tituloRequisitado ==" "){
        response.status(400).json([{
            "mensagem": "por favor, insira o titulo correto da serie"
        }])
    }else{
        response.status(200).json(serieFiltrada)
    }

}

//parâmetro para gênero
if(request.query.genre || request.query.genre == ''){ //response não pode ficar dentro do looping porque ele tem que ser mandado só uma vez
    const genero = request.query.genre
    let newList = []

    series.forEach(serie => {                       //passar por cada unidade de série dentro da lista series, percorre o json

        for(item of serie.genre){                   //passar pelo array de genre 

            if(item.includes(genero) && serie.genre.includes(item)){    //verifica se o item contém o gênero enviado na requisição e se serie.genre possui esse item
                newList.push(serie)
            }
        }

        if(genero == ''){
            return response.status(400).json([{
                'mensagem': 'ERRO: gênero não encontrado'
            }])
            //se não for passado nenhum parâmetro, e for a rota "pura", retornará todas as séries, como desejado na rota raiz.

        }return response.status(200).send(newList)

        
    })

    return response.status(200).send(series)

}



module.exports ={

    getAll,
    getById,
    getByTitle,
    getByGenre
}
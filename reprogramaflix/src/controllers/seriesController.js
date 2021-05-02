const series = require("../models/series.json")

const getSeries = (request, response) => {

    //parâmetro de título
    if(request.query.title || request.query.title == ''){     //verifica se o title está sendo passado como parâmetro
        const titulo = request.query.title.toLowerCase()
        const tituloFiltrado = series.find(serie => serie.title.toLowerCase().includes(titulo))
    
        if(tituloFiltrado == undefined || titulo == ''){ //em js undefined e string vazia retornam falso, assim, poderia utilizar como o ex: if(tituloFiltrado || titulo)
            return response.status(400).json([{
                'mensagem': 'Por favor, digite um título valido :)'
            }])

        }else{
            return response.status(200).send(tituloFiltrado)
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
            }
        })
        
        return response.status(200).send(newList)
    }
    //se não for passado nenhum parâmetro, e for a rota "pura", retornará todas as séries, como desejado na rota raiz.
    return response.status(200).send(series)
}

const getById = (request, response) => {
    const idInput = request.params.idInput
    const idFiltrado = series.find(series => series.id == idInput)

    if(idFiltrado == undefined || idInput == ''){
        response.status(404).json([{
            'mensagem': 'Id inválido. Série não encontrada'
        }])

    }else{
        response.status(200).json(idFiltrado)
    }
}

module.exports = {
    getSeries,
    getById
}
const series = require("../models/series.json")

const getSeries = (request, response) => {
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
    return response.status(200).json(series)   
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

const getByGenre = (request, response) => {
    const genreInput = series.find(serie => serie.genre)
    //console.log(genreIput)
    //const genreFilter = series.find(serie => serie.genre == genreInput)

    response.status(200).json(genreInput)
}

module.exports = {
    getSeries,
    getById,
    getByGenre
}
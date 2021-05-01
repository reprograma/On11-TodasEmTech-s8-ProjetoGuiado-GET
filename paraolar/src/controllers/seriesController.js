const series = require ("../models/series.json")

const getAll = (resquest, response)=>{
    response.status(200).send(series)

}

module.exports = {
    getAll
}
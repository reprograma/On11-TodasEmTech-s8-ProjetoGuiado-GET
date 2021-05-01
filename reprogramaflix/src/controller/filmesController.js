// files
const filmes = require("../models/filmes.json");


// logica
const getAll = (req, res) => res.status(200).send(filmes);

const getById = (req, res) => { 
   const id =  req.params.id
   const filtro = filmes.find(filme => filme.id == id)  
   if (filtro && id.length > 0) res.status(200).send(filtro)

   else res.status(404).json({ 
       'error' : 'Por favor, digite uma ID'
   }) 
}

const getByTitle = (req, res) => {
    const titulo = req.query.titulo.toLowerCase();
    const filtro = filmes.find(filme => filme.Title.toLowerCase().includes(titulo))
    // e se um corno diditar no json com 2 espacos???
    if (filtro && titulo.length > 0 && titulo != " ") res.status(200).send(filtro)

    else res.status(400).json({ 
        'error' : 'Por favor tente outra vez, nos tentamos o maximo encontrar o que foi solicitado, mas não encontramos :('
    })

}

const getByGener = (req, res) => {
    const genero = req.query.genero.toLowerCase();
    const filme = filmes.filter(filme => {
        let generSeach = filme.Genre
        .split(",")
        .find(gener => gener.toLowerCase().includes(genero));
        if (generSeach) return filme;
    })
    
    if (filme.length==0 || genero == " ")
    res.status(400).json({ "mensagem" : "desculpa, não conseguimos achar"});
    else res.status(200).json(filme)
   
}

// export
module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGener,
}
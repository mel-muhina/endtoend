const Country = require("../models/Country")

async function index(req, res) {
    try {
        const countries = await Country.getAll()
        res.status(200).json(countries)
    } catch(err){
        res.status(500).json({ error: err.message })
    }
}

async function show(req, res) {
    try {
        const name = req.params.name
        const country = await Country.getOneByCountryName(name)
        res.status(200).json(country)
    }catch(err){
        res.status(404).json({ error: err.message })
    }
}

async function create(req, res) {
    try {
        const data = req.body
        console.log(req);
        const newCountry = await Country.create(data)
        res.status(201).json(newCountry)

    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

async function destroy(req, res) {
    try {
       const name = req.params.name
       const country = await Country.getOneByCountryName(name)
       const result = await country.destroy()
       res.sendStatus(204)

    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}

async function update(req, res) {
      try {
       const name = req.params.name;
       const newCountry = req.body;

       const findCountry = await Country.getOneByCountryName(name)
     
       if(findCountry) {
        
        const result = await findCountry.update(name, newCountry)
        // console.log(result);
        res.status(200).json(result)
       }
       

    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    index,
    show,
    create,
    destroy,
    update

}
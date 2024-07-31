const People = require("../models/People")

async function index(req, res) {
    try {
        const people = await People.getAll()
        res.status(200).json(people)
    } catch(err){
        res.status(500).json({ error: err.message })
    }
}

async function show(req, res) {
    try {
        const name = req.params.name
        const people = await People.getOneByName(name)
        res.status(200).json(people)
    }catch(err){
        res.status(404).json({ error: err.message })
    }
}

async function showById(req, res) {
    try {
        const id = req.params.id
        const people = await People.getOneById(id)
        res.status(200).json(people)
    }catch(err){
        res.status(404).json({ error: err.message })
    }
}

async function create(req, res) {
    try {
        const data = req.body
        const newPerson = await People.create(data)
        res.status(201).json(newPerson)

    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

async function destroy(req, res) {
    try {
       const id = req.params.id
       const people = await People.getOneById(id)
       console.log("controller destroy", people)
       const result = await people.destroy()
       res.sendStatus(204)

    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}

// async function update(req, res) {
//       try {
//        const name = req.params.name;
//        const newCountry = req.body;

//        const findCountry = await Country.getOneByCountryName(name)
     
//        if(findCountry) {
//         const result = await findCountry.update(newCountry)
//         console.log("controller update function 6", res.status )

//         // console.log(""result);
//         res.status(200).json(result)
//        }
       

//     } catch(err) {
//         res.status(500).json({ error: err.message })
//     }
// }

module.exports = {
    index,
    show,
    showById,
    create,
    destroy
    

}
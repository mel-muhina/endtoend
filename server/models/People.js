const db = require("../db/connect")

class People {
    constructor({people_id, name, languages, country_origin_name, country_id}) {
        this.people_id = people_id,
        this.name = name,
        this.languages = languages,
        this.country_origin_name = country_origin_name,
        this.country_id = country_id
    }

    static async getAll() {
        const response = await db.query("SELECT name FROM people;")
        if(response.rows.length === 0) {
            throw new Error("No people avaliable.")
        }
        return response.rows.map(p => new People(p))
    }

    static async getOneByName(name) {
        const searchPattern = `%${name}`
        const response = await db.query("SELECT * FROM people WHERE LOWER(name) LIKE LOWER($1);", [searchPattern])
        if(response.rows.length != 1) {
            throw new Error("Unable to locate this person. Please enter a correct surname.")
        }
        return new People(response.rows[0])
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM people WHERE people_id = ($1);", [id])
        let foundId = response.rows[0].people_id
        if(response.rows.length != 1) {
            throw new Error("Unable to locate this person. Please enter a correct ID.")
        }
        return new People(response.rows[0])
    }

    static async create(data) {
        const { name, languages, country_origin_name} = data

        const existingPerson = await db.query("SELECT name FROM people WHERE LOWER(name) = LOWER($1);", [name])

        let countryResult = await db.query("SELECT country_id FROM country WHERE LOWER(name) LIKE LOWER($1);", [`%${country_origin_name}%`])
        if (countryResult.rows.length === 0) {
            throw new Error(`Country with name ${country_origin_name} does not exist.`)
        }

       let country_id = countryResult.rows[0].country_id;

        if(existingPerson.rows.length === 0) {
            let response = await db.query("INSERT INTO people (name, languages, country_origin_name, country_id) VALUES ($1, $2, $3, $4) RETURNING *;", [name, languages, country_origin_name, country_id])
            return new People(response.rows[0])
        } else {
            throw new Error("A person with this name already exists")
        }
    }

    async destroy(data) {
        const response = await db.query("DELETE FROM people WHERE people_id = $1 RETURNING *;", [this.people_id])
        return new People(response.rows[0])
     
    }

    // async update(newCountry) {
    //     const oldName = this.name
    //     const { name, capital, population, languages } = newCountry;
    //     const result = await db.query("SELECT name FROM country WHERE LOWER(name) = LOWER($1);", [oldName])
      
    //     if(result.rows.length > 0) {
    //         const updatedCountry = result.rows[0].name;
       
    //         let response = await db.query("UPDATE country SET name=($1), capital=($2), population=($3), languages=($4) WHERE LOWER(name) = LOWER($5) RETURNING *;", [name, capital, population, languages, updatedCountry])
    //         return new Country(response.rows[0])
    //     } else {
    //         throw new Error("Country not found")
    //     }
    // }
    
}



module.exports = People
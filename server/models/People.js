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

    // static async create(data) {
    //     //even if we dont have all the values added here, they can still be added in patch
    //     // object destructuring, in the oject.data this is what it has
    //     const { name, capital, population, languages } = data
    //     const existingCountry = await db.query("SELECT name FROM country WHERE LOWER(name) = LOWER($1);", [name])
    //     if(existingCountry.rows.length === 0) {
    //         let response = await db.query("INSERT INTO country (name, capital, population, languages) VALUES ($1, $2, $3, $4) RETURNING *;", [name, capital, population, languages])
    //         return new Country(response.rows[0])
    //     } else {
    //         throw new Error("A country with this name already exists")
    //     }
    // }

    // async destroy(data) {
    //     const response = await db.query("DELETE FROM country WHERE name = $1 RETURNING *;", [this.name])
    //     return new Country(response.rows[0])
     
    // }

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
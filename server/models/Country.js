const db = require("../db/connect")

class Country {
    constructor({country_id, name, capital, population, languages, fun_fact, map_image_url}) {
        this.country_id = country_id
        this.name = name
        this.capital = capital
        this.population = population
        this.languages = languages
        this.fun_fact = fun_fact
        this.map_image_url = map_image_url
    }

    //static because we're calling on class itself and don't need any particular data like this.country that instance would need
    static async getAll() {
        //retrieve all names from country but if the length is 0 then will throw an error
        const response = await db-query("SELECT name FROM country;")
        if(response.rows.length === 0) {
            throw new Error("No countries avaliable.")
        }
        // map through the rows we found, pass the data to return the data to user
        return response.rows.map(c => new Country(c))
    }
}



module.exports = Country
const { Pool } = require("pg")
// Connect to the database - require a DB_URL, opens and closes connections for us


const db = new Pool({
    connectionString: process.env.DB_URL
})

module.exports = db
const { Pool } = require("pg")

const pool = new Pool({
    host: "localhost",
    password: "npg_RxPgNa2db1OQ",
    database: "myspot",
    port: 5432,
    connectionString: process.env.database_url,
    ssl: { rejectUnauthorized: false }
})

module.exports = pool

pool.query("SELECT NOW()", (err, res) => {
    if (err) {
    console.error(" Error DB", err)
    } else {
    console.log(" PostgreSQL conectado:", res.rows[0])
    }
})

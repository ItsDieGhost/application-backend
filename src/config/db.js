const { Pool } = require('pg')
require('dotenv').config()

const connectionString = process.env.DATABASE_URL || process.env.database_url || null

const pool = new Pool({
    connectionString,
    ssl: connectionString ? { rejectUnauthorized: false } : false
})

module.exports = pool

if (connectionString) {
    pool.query('SELECT NOW()', (err, res) => {
        if (err) {
            console.error('Error DB', err)
        } else {
            console.log('PostgreSQL conectado:', res.rows[0])
        }
    })
} else {
    console.warn('No DATABASE_URL provided — usando fake DB en memoria')
}

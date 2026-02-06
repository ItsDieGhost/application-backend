const fs = require('fs')
const path = require('path')
const pool = require('../config/db')

async function initDb() {
  const sqlPath = path.join(__dirname, '..', 'db', 'init.sql')
  if (!process.env.DATABASE_URL && !process.env.database_url) {
    console.warn('DATABASE_URL not set — saltando inicialización DB')
    return
  }

  try {
    const sql = fs.readFileSync(sqlPath, 'utf8')
    // ejecutar cada statement (simple split por ;)
    const statements = sql.split(/;\s*\n/).map(s => s.trim()).filter(Boolean)
    for (const stmt of statements) {
      await pool.query(stmt)
    }
    console.log('DB inicializada (db/init.sql)')
  } catch (err) {
    console.error('Error inicializando DB:', err.message || err)
  }
}

module.exports = initDb

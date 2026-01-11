// src/routes/auth.routes.js
const express = require("express")
const router = express.Router()
const pool = require("./config/db")

// REGISTER
router.post("/register", async (req, res) => {
    const { username, password } = req.body

    try {
    const exists = await pool.query(
        "SELECT id FROM users WHERE username = $1",
        [username]
    )

    if (exists.rows.length > 0) {
        return res.status(400).json({ message: "Usuario ya existe" })
    }

    await pool.query(
        "INSERT INTO users (username, password) VALUES ($1, $2)",
        [username, password]
    )

    res.json({ message: "Usuario registrado correctamente" })
    } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Error del servidor" })
    }
})

// LOGIN
router.post("/login", async (req, res) => {
    const { username, password } = req.body

    try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
        [username, password]
    )

    if (result.rows.length === 0) {
        return res.status(401).json({ message: "Credenciales incorrectas" })
    }

    res.json({ message: "Login correcto", user: result.rows[0] })
    } catch (err) {
    res.status(500).json({ message: "Error del servidor" })
    } 
})

module.exports = router

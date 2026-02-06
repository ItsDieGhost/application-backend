const pool = require('../config/db')
const bcrypt = require('bcrypt')

// REGISTER
const register = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields' })
    try {
        const hashed = await bcrypt.hash(password, 10)
        const { rows } = await pool.query(
            'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, username, email, role',
            [name, email, hashed, 'user']
        )
        res.status(201).json({ message: 'User registered', user: rows[0] })
    } catch (err) {
        if (err.code === '23505') return res.status(400).json({ error: 'User already exists' })
        console.error(err)
        res.status(500).json({ error: 'DB error' })
    }
}

// LOGIN
const login = async (req, res) => {
    const email = (req.body && req.body.email) || (req.query && req.query.email)
    const password = (req.body && req.body.password) || (req.query && req.query.password)

    if (!email || !password) {
        return res.status(405).json({ error: 'Use POST /login with JSON body {email, password}' })
    }

    try {
        console.log('[auth] login attempt for email:', email)
        const { rows } = await pool.query('SELECT * FROM users WHERE email=$1', [email])
        const user = rows[0]
        if (!user) return res.status(401).json({ error: 'Invalid credentials' })

        const ok = await bcrypt.compare(password, user.password)
        if (!ok) return res.status(401).json({ error: 'Invalid credentials' })

        delete user.password
        res.json({ message: 'Login successful', token: 'fake-jwt-token', user })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'DB error' })
    }
}

module.exports = { login, register }

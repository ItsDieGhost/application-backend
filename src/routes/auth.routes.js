const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')


const { login, register } = require("../controllers/auth.controller")

router.post("/login", login)
router.post("/register", register)

// GET handlers to avoid 404 when frontend issues GET by mistake
// permitir GET /login (valida si se pasan ?email=...&password=...)
router.get('/login', login)

module.exports = router

const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')


// login
router.post('/login', authController.login)

// perfil (usuario logueado)
router.get('/profile/:id', authController.profile)

module.exports = router

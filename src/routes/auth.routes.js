const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')

// LOGIN
router.post('/login', authController.login)

// PERFIL (usuario logueado)
router.get('/profile/:id', authController.profile)

module.exports = router

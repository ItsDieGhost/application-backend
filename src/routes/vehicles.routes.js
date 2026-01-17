// src/routes/vehicles.routes.js
const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicles.controller');

router.post('/', vehicleController.addVehicle);
router.get('/', vehicleController.getAllVehicles);

module.exports = router;
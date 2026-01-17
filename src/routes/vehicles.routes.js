// src/routes/vehicles.routes.js
const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicles.controller');


router.get('/:id', vehicleController.getVehicleById); // Nuevo
router.post('/', vehicleController.addVehicle);
router.get('/', vehicleController.getAllVehicles);
router.put('/:id', vehicleController.updateVehicle); // Nuevo
router.delete('/:id', vehicleController.deleteVehicle); // Nuevo

module.exports = router;
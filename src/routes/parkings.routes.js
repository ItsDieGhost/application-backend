const express = require('express');
const router = express.Router();
const parkingController = require('../controllers/parkings.controller');

router.get('/', parkingController.getAllParkings);
router.get('/:id', parkingController.getParkingById);
router.post('/', parkingController.addParking);
router.put('/:id', parkingController.updateParking);
router.delete('/:id', parkingController.deleteVehicle);

module.exports = router;
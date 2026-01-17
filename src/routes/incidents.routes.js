const express = require('express');
const router = express.Router();
const incidentController = require('../controllers/incidents.controller');

router.get('/', incidentController.getAllIncidents);
router.get('/:id', incidentController.getIncidentById); // NUEVO
router.get('/vehicle/:placa', incidentController.getIncidentsByVehicle);
router.post('/', incidentController.addIncident);
router.put('/:id', incidentController.updateIncident); // NUEVO
router.delete('/:id', incidentController.deleteIncident);

module.exports = router;
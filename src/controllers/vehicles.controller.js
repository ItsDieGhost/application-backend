// src/controllers/vehicles.controller.js
const db = require('../data/fakeDB');

const addVehicle = (req, res) => {
    const { marca, modelo, color, placa } = req.body;

    // Validación básica
    if (!marca || !modelo || !color || !placa) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const newVehicle = {
        id: db.vehicles.length + 1,
        marca,
        modelo,
        color,
        placa
    };

    db.vehicles.push(newVehicle);

    res.status(201).json({
        message: "Vehículo agregado con éxito",
        data: newVehicle
    });
};

const getAllVehicles = (req, res) => {
    res.status(200).json(db.vehicles);
};

module.exports = {
    addVehicle,
    getAllVehicles
};
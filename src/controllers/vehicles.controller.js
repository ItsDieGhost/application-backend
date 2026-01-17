const db = require('../data/fakeDB');

// Obtener todos los vehículos
const getAllVehicles = (req, res) => {
    res.status(200).json(db.vehicles);
};

// Obtener un vehículo por ID
const getVehicleById = (req, res) => {
    const id = parseInt(req.params.id);
    const vehicle = db.vehicles.find(v => v.id === id);

    if (!vehicle) {
        return res.status(404).json({ message: "Vehículo no encontrado" });
    }
    res.status(200).json(vehicle);
};

// Agregar un vehículo
const addVehicle = (req, res) => {
    const { marca, modelo, color, placa } = req.body;
    if (!marca || !modelo || !color || !placa) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const newVehicle = {
        id: db.vehicles.length > 0 ? db.vehicles[db.vehicles.length - 1].id + 1 : 1,
        marca,
        modelo,
        color,
        placa
    };

    db.vehicles.push(newVehicle);
    res.status(201).json({ message: "Vehículo agregado con éxito", data: newVehicle });
};

// Actualizar un vehículo
const updateVehicle = (req, res) => {
    const id = parseInt(req.params.id);
    const { marca, modelo, color, placa } = req.body;

    const index = db.vehicles.findIndex(v => v.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Vehículo no encontrado para actualizar" });
    }

    // Actualizamos solo los campos que vengan en el body o mantenemos los actuales
    db.vehicles[index] = {
        ...db.vehicles[index],
        marca: marca || db.vehicles[index].marca,
        modelo: modelo || db.vehicles[index].modelo,
        color: color || db.vehicles[index].color,
        placa: placa || db.vehicles[index].placa
    };

    res.status(200).json({ message: "Vehículo actualizado", data: db.vehicles[index] });
};

// Eliminar un vehículo
const deleteVehicle = (req, res) => {
    const id = parseInt(req.params.id);
    const index = db.vehicles.findIndex(v => v.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Vehículo no encontrado" });
    }

    const deletedVehicle = db.vehicles.splice(index, 1);
    res.status(200).json({ message: "Vehículo eliminado correctamente", data: deletedVehicle[0] });
};

module.exports = {
    getAllVehicles,
    getVehicleById,
    addVehicle,
    updateVehicle,
    deleteVehicle
};
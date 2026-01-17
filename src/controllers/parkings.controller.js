const db = require('../data/fakeDB');

// Obtener todos
const getAllParkings = (req, res) => {
    res.status(200).json(db.parkings);
};

// Obtener por ID
const getParkingById = (req, res) => {
    const id = parseInt(req.params.id);
    const parking = db.parkings.find(p => p.id === id);
    if (!parking) return res.status(404).json({ message: "Estacionamiento no encontrado" });
    res.status(200).json(parking);
};

// Crear uno nuevo
const addParking = (req, res) => {
    const { nombre, ubicacion, espacios, pisos } = req.body;

    if (!nombre || !ubicacion || !espacios || !pisos) {
        return res.status(400).json({ message: "Nombre, ubicación, espacios y pisos son obligatorios" });
    }

    const newParking = {
        id: db.parkings.length > 0 ? db.parkings[db.parkings.length - 1].id + 1 : 1,
        nombre,
        ubicacion,
        espacios,
        pisos
    };

    db.parkings.push(newParking);
    res.status(201).json({ message: "Estacionamiento creado con éxito", data: newParking });
};

// Actualizar
const updateParking = (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, ubicacion, espacios, pisos } = req.body;
    const index = db.parkings.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).json({ message: "No encontrado" });

    db.parkings[index] = {
        ...db.parkings[index],
        nombre: nombre || db.parkings[index].nombre,
        ubicacion: ubicacion || db.parkings[index].ubicacion,
        espacios: espacios || db.parkings[index].espacios,
        pisos: pisos || db.parkings[index].pisos
    };

    res.status(200).json({ message: "Actualizado correctamente", data: db.parkings[index] });
};

// Eliminar
const deleteParking = (req, res) => {
    const id = parseInt(req.params.id);
    const index = db.parkings.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).json({ message: "No encontrado" });

    const deleted = db.parkings.splice(index, 1);
    res.status(200).json({ message: "Eliminado", data: deleted[0] });
};

module.exports = {
    getAllParkings,
    getParkingById,
    addParking,
    updateParking,
    deleteVehicle: deleteParking // Corregido el nombre del export
};
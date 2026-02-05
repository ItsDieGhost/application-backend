const db = require('../data/fakeDB');

const addIncident = (req, res) => {
    const { placa, hora, dia, descripcion } = req.body;
    if (!placa || !hora || !dia || !descripcion) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
// arreglo
    const newIncident = {
        id: db.incidents.length > 0 ? db.incidents[db.incidents.length - 1].id + 1 : 1,
        placa: placa.toUpperCase(),
        hora,
        dia,
        descripcion
    };

    db.incidents.push(newIncident);
    res.status(201).json({ message: "Incidente registrado", data: newIncident });
};

const getAllIncidents = (req, res) => {
    res.status(200).json(db.incidents);
};

// obtener por id
const getIncidentById = (req, res) => {
    const id = parseInt(req.params.id);
    const incident = db.incidents.find(i => i.id === id);
    if (!incident) return res.status(404).json({ message: "Incidente no encontrado" });
    res.status(200).json(incident);
};

const getIncidentsByVehicle = (req, res) => {
    const { placa } = req.params;
    const filtered = db.incidents.filter(i => i.placa === placa.toUpperCase());
    res.status(200).json(filtered);
};

// actualizar incidente
const updateIncident = (req, res) => {
    const id = parseInt(req.params.id);
    const { placa, hora, dia, descripcion } = req.body;
    const index = db.incidents.findIndex(i => i.id === id);

    if (index === -1) return res.status(404).json({ message: "Incidente no encontrado" });

    db.incidents[index] = {
        ...db.incidents[index],
        placa: placa ? placa.toUpperCase() : db.incidents[index].placa,
        hora: hora || db.incidents[index].hora,
        dia: dia || db.incidents[index].dia,
        descripcion: descripcion || db.incidents[index].descripcion
    };

    res.status(200).json({ message: "Incidente actualizado", data: db.incidents[index] });
};

// borrar incidentes
const deleteIncident = (req, res) => {
    const id = parseInt(req.params.id);
    const index = db.incidents.findIndex(i => i.id === id);
    if (index === -1) return res.status(404).json({ message: "Incidente no encontrado" });

    const deleted = db.incidents.splice(index, 1);
    res.status(200).json({ message: "Incidente eliminado", data: deleted[0] });
};

module.exports = {
    addIncident,
    getAllIncidents,
    getIncidentById,
    getIncidentsByVehicle,
    updateIncident, 
    deleteIncident
};
// src/data/fakeDB.js

// 1. Definimos los datos iniciales de usuarios
let users = [
    {
        id: 1,
        username: "admin",
        password: "1234",
        email: "admin@myspot.com",
        role: "admin"
    },
    {
        id: 2,
        username: "user1",
        password: "1234",
        email: "user1@myspot.com",
        role: "user"
    }
];

// 2. Creamos UN SOLO objeto unificado con todas las colecciones
const db = {
    users: users,
    vehicles: [],
    parkings: [],
    incidents: [] // <--- Agregamos este array para los incidentes
};


// 3. Exportamos el objeto para que los controladores lo usen
module.exports = db;
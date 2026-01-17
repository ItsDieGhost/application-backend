// src/data/fakeDB.js

// 1. Definimos los datos iniciales
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

// 2. Creamos el objeto unificado
const db = {
    users: users, // Usamos el array que definimos arriba
    vehicles: [] 
};

// 3. Exportamos UN SOLO objeto que contiene todo
module.exports = db;
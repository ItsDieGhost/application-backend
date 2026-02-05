let users = [
    {
        id: 1,
        username: "admin",
        password: "4a8f4s9g4h84hd6",
        email: "hola@gmail.com",
        role: "admin"
    },
    {
        id: 2,
        username: "user1",
        password: "a68s12dfiad4",
        email: "user1@myspot.com",
        role: "user"
    }
];

// constante que engloba todos
const db = {
    users: users,
    vehicles: [],
    parkings: [],
    incidents: []
};


//  se exporta a los controladores
module.exports = db;
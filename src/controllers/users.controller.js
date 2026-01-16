const { users } = require('../data/fakeDB')

// GET - listar todos los usuarios
const getUsers = (req, res) => {
res.json(users)
}

// GET - obtener usuario por ID
const getUserById = (req, res) => {
const id = parseInt(req.params.id)
const user = users.find(u => u.id === id)

if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" })
}

res.json(user)
}

// POST - crear usuario
const createUser = (req, res) => {
const { username, password, email, role } = req.body

const newUser = {
    id: users.length + 1,
    username,
    password,
    email,
    role
}

users.push(newUser)

res.status(201).json({
    message: "Usuario creado",
    user: newUser
})
}

// PUT - actualizar usuario
const updateUser = (req, res) => {
const id = parseInt(req.params.id)
const user = users.find(u => u.id === id)

if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" })
}

const { username, password, email, role } = req.body

user.username = username ?? user.username
user.password = password ?? user.password
user.email = email ?? user.email
user.role = role ?? user.role

res.json({
    message: "Usuario actualizado",
    user
})
}

// DELETE - eliminar usuario
const deleteUser = (req, res) => {
const id = parseInt(req.params.id)
const index = users.findIndex(u => u.id === id)

if (index === -1) {
    return res.status(404).json({ message: "Usuario no encontrado" })
}

users.splice(index, 1)

res.json({ message: "Usuario eliminado" })
}

module.exports = {
getUsers,
getUserById,
createUser,
updateUser,
deleteUser
}

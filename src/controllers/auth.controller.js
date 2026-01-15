const { users } = require('../data/fakeDB')

// LOGIN
const login = (req, res) => {
const { username, password } = req.body

const user = users.find(
    u => u.username === username && u.password === password
)

if (!user) {
    return res.status(404).json({ message: "Credenciales incorrectas" })
}

    res.json({
    message: "Login exitoso",
    user
    })
}

// PERFIL
const profile = (req, res) => {
    const { id } = req.params

    const user = users.find(u => u.id === parseInt(id))

    if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" })
    }

    res.json(user)
}

module.exports = {
    login,
    profile
}

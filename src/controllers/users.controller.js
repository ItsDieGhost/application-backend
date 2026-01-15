const { users } = require('../data/fakeDB')

const getUsers = (req, res) => {
    res.json(users)
}

const createUser = (req, res) => {
    const newUser = {
    id: users.length + 1,
    ...req.body
    }

    users.push(newUser)
    res.status(201).json(newUser)
}

module.exports = {
    getUsers,
    createUser
}

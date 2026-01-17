const express = require('express')
const cors = require('cors')
require('dotenv').config()
const authRoutes = require('./routes/auth.routes')
const usersRoutes = require('./routes/users.routes')
const vehicleRoutes = require('./routes/vehicles.routes');
const app = express()

//rutasssssssssssss

app.use(cors())
app.use(express.json())

app.use('/api/vehicles', vehicleRoutes);
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

app.listen(5000, () => {
console.log('servidor corriendo en http://localhost:5000')
})

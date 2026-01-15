const express = require('express')
const app = express()

app.use(express.json())

// IMPORTAR RUTAS
const authRoutes = require('./routes/auth.routes')

// USAR RUTAS
app.use('/api/auth', authRoutes)

const PORT = 5000
app.listen(PORT, () => {
console.log(` Backend corriendo en http://localhost:${PORT}`)
})

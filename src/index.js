const express = require("express")
const cors = require("cors")
require('dotenv').config()


const authRoutes = require("./routes/auth.routes")

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Rutas
app.use("/api/auth", authRoutes)

// Servidor
const PORT = 4000
app.listen(PORT, () => {
    console.log(`corriendo en http://localhost:${PORT}`)
})

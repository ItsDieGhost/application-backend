// src/server.js
const express = require("express")
const cors = require("cors")

const authRoutes = require("./routes/auth.routes")

const app = express()

app.use(cors())
app.use(express.json()) // leer JSON del frontend

app.use("/api/auth", authRoutes)

app.listen(4000, () => {
  console.log("corriendo en http://localhost:4000")
})

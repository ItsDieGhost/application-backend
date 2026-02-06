const express = require('express')
const cors = require('cors')
require('dotenv').config()
const authRoutes = require('./routes/auth.routes')
const usersRoutes = require('./routes/users.routes')
const vehicleRoutes = require('./routes/vehicles.routes');
const parkingRoutes = require('./routes/parkings.routes');
const incidentRoutes = require('./routes/incidents.routes');
const app = express()
const initDb = require('./db/initDb')

//rutasssssssssssss

app.use(cors())
// parse application/x-www-form-urlencoded (from HTML forms)
app.use(express.urlencoded({ extended: true }))
// parse application/json
app.use(express.json())
// Middleware: limpiar saltos de línea o %0A en la URL (evita 404 por URL mal formada)
app.use((req, res, next) => {
	try {
		// eliminar codificaciones y caracteres de nueva línea residuales
		req.url = req.url.replace(/%0A|%0D|[\r\n]+/g, '');
	} catch (e) {
		// en caso de cualquier problema, continuar normalmente
	}
	next();
})
// Normalizar URL: eliminar saltos de línea o secuencias %0A al final
app.use((req, res, next) => {
	try {
		req.url = req.url.replace(/(%0A|%0D)+$/gi, '').replace(/[\r\n]+$/g, '')
	} catch (e) {
		// ignore and continue
	}
	next()
})
app.use('/api/incidents', incidentRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/parkings', parkingRoutes);
// Exponer rutas de auth directamente en /register y /login
app.use('/', authRoutes)
app.use('/api/users', usersRoutes)

// inicializar esquema si hay DATABASE_URL
initDb().catch(() => {})

app.listen(4000, () => {
console.log('servidor corriendo en http://localhost:4000')
})

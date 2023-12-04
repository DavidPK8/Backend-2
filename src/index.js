// Creacion de un web server en Express

// Invocar la libreria de express
const express = require('express')

// Crear una instancia
const app = express()

// Crear la ruta
app.get('/', (req, res) =>{
    res.send("Bienvenidos")
})

// Se crea una nueva ruta
app.get('/dashboard', (req, res) =>{
    res.send("Dashboard principal")
})

// Se crea una ruta de error en caso de no ser encontrado
app.use((req, res) => {  // Cuando se usa "use" significa que se esta usando un middleware
    res.send("404 - Not Found")  // El orden es importante por lo tanto el "use" siempre debe estar al final despues de los get
})

// Iniciar el servidor en el puerto 3000
app.listen(3000)
console.log("Web Server Ejecutandose en el puerto 3000")
// Creacion de un web server en Express

// Invocar la libreria de express
const express = require('express') 

// Crear una instancia
const app = express()

// Iniciar el servidor en el puerto 3000
app.listen(3000)
console.log("Web Server Ejecutandose en el puerto 3000")

app.get('/', (req, res) =>{ 
    res.send("Landing page")
})

app.get('/dashboard', (req, res) =>{ 
    res.send("Bienvenido, Usuario")
})

app.get('/about', (req, res) =>{ 
    res.send("Sobre nosotros")
})

/*
RUTAS PUBLICAS Y PRIVADAS
app.use(express.json())

app.get('/entrada', (req, res) => { // Rutas publicas
   res.send("Entrada al local")
})

// CREAR UN MIDDLEWARE - Se crea para que unicamente los usuarios registrados puedan acceder a una ruta privada
app.use((req, res, next) =>{
    const {email, password} = req.body
    if(email == "David@gmail.com" && password == 12345){
        next() // Permita que puedas acceder a la ruta privada
    }else{
        res.send("Usuario no registrado") // No permite el acceso a la ruta privada
    }
})

app.get('/pedido', (req, res) =>{ // Rutas privadas
    res.send(`Bienvenido, ${req.body.email} listo para tomar su orden`)
})
*/

/*
REPASO
const port = 3000

app.get('/', (req, res) => {
    // REQUEST DE LA PETICION - CLIENTE
    req.body
    req.params
    req.query
    // RESPONDER AL USUARIO DESDE EL SERVIDOR
    res.send()
    res.sendFile()
    res.json()
    res.render()
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
/*

/*
USO DE HANDLEBARS
//COMMONJS
const express = require('express') 
const {engine} = require('express-handlebars')

import { engine } from 'express-handlebars' // ESMODULES

// Crear una instancia
const app = express()

// Utilizar un motor de plantillas
app.engine('handlebars', engine());

// Extension de la pagina
app.set('view engine', 'handlebars');

// Ubicacion del directorio views
app.set('views', './src/views');

app.get('/hamburguesa/vegana', (req, res) =>{
    res.render('home')
})

app.get('/hamburguesa/contactos', (req, res) =>{
    res.render('contactos')
})

app.get('/hamburguesa/about', (req, res) =>{
    res.render('about')
})
*/

/*
// Mandar texto
app.get('/hamburguesa/simple', (req, res) =>{
    res.send("Hamburguesa - simple")
})

console.log(__dirname)

// Mandar imagenes
app.get('/hamburguesa/doble', (req, res) =>{
    res.sendFile('./doble.jpg',{
        root:__dirname
    })
})

// Mandar documento de word
app.get('/hamburguesa/triple', (req, res) =>{
    res.sendFile('./triple.docx',{
        root:__dirname
    })
})

// Manda un json
app.get('/hamburguesa/mixta', (req, res) =>{
    res.status(200).json({
        "tipo": "Mixta",
        "extra": "No"
    })
})*/


/*
USO DE QUERY PARAMS
app.get('/search', (req, res) =>{
    // console.log(req.query) Lo que se ingrese en google se imprimira en la terminal
    if(req.query.tipo == "sencilla"){
        res.send("Hamburguesa sencilla")
    }
    else{
        res.send("No existe resultados")
    }
})*/

/*
USO DE PARAMS
// Mandar info en formato JSON
app.use(express.json())

app.get('/pedido/:tipo', (req, res) =>{
    // console.log(req.params) Lo que se ingrese en google se imprimira en la terminal
    res.send(`El pedido es hamburguesa ${req.params.tipo}`)
})*/


/*
MANDAR INFO EN JSON
// Mandar info en formato JSON
app.use(express.json())

// Se crea una ruta por Post
app.post('/register', (req, res) => {
    const{email, password} = req.body // Destructuracion de JSv
    res.send(`El email es ${email} y su password es ${password}`)  // Backlick
})*/


/*
MANDAR INFO A UN LOCALHOST
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

*/


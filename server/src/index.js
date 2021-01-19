const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const conectarDB = require('./config/db');
const cors = require('cors');

//conectamos a la base de datos
conectarDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//no haya problemas de cors
app.use(cors());

//importamos las rutas
app.use('/operaciones', require('./rutas/operaciones.js'));
app.use('/categorias', require('./rutas/categorias.js'));


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server online ", PORT)
})
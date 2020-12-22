const express = require('express');
const cors = require('cors');
const server = express();
const path = require("path");
//Configuraciones
server.set('port',1337);

//Middlewares
server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, 'build')));
//Rutas
server.use('/estudiantes', require('./routes/estudiantes'));
server.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


module.exports = server;
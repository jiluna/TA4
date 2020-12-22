const fs = require('fs');
const db = {};

let PST = {};
function init() {
    try {
        const json_text_PST = fs.readFileSync('./src/pstDatabase.json', 'utf-8')
        PST = JSON.parse(json_text_PST)
    } catch (e) {
        PST = {
            estudiantes: [],
            profesores: {
                teoria: { nombre: "Msig. Adriana Collaguazo", edad: 20 },
                practica: { nombre: "Ing. Christopher Vaccaro", edad: 26 }
            }
        }
        fs.writeFileSync('./src/pstDatabase.json', JSON.stringify(PST), 'utf-8');
    }

    db.teoria = PST.profesores.teoria;
    db.practica = PST.profesores.practica;
    db.profesores = PST.profesores;
    db.estudiantes = PST.estudiantes;
}
function updateDB(){
    fs.writeFileSync('./src/pstDatabase.json', JSON.stringify(PST), 'utf-8');
}

db.init = init;
db.updateDB = updateDB;

module.exports = db;
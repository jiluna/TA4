const app = require('./app');
const db = require("./controllers/database")
const port = app.get('port');

db.init();
app.listen(port, () => {
    console.log(`Iniciar Página web con http://localhost:${port}`);
})

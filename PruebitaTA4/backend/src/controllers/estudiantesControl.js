const db = require('./database');
const estudiantesControl = {};

estudiantesControl.getEstudiantes = (req,res)=>{
    res.json(db.estudiantes);
}
estudiantesControl.postEstudiante = (req,res)=>{
    const {id, nombre,apellido} = req.body;
    if(!id || !nombre || !apellido){
        res.status(400).send("Datos incompletos {id, nombre, apellido}");
        return;
    }
    const estudiante = {
        id,
        nombre,
        apellido
    }
    
    //validacion para datos duplicados
    const estudiante1=db.estudiantes.find(
        (est)=>est.id == estudiante.id)
    if(estudiante1){
        res.status(400).send("id duplicados");
        return;
    }
    console.log('Petición POST recibida desde un cliente')
    console.log(estudiante)
    db.estudiantes.push(estudiante);
    db.updateDB();
    res.send('Petición POST recibida al servidor ')
}
estudiantesControl.getEstudiante = (req,res)=>{
    const estudiante = db.estudiantes.find(
        (est)=>est.id == req.params.id
    );

    res.json(estudiante);
}
estudiantesControl.putEstudiante = (req,res)=>{
    const estt={id:parseInt(req.params.id),nombre:req.body.nombre,apellido:req.body.apellido}
    //const {nombre,apellido} = req.body;
    if(!estt.nombre || !estt.apellido){
        res.status(400).send("Datos incompletos {nombre, apellido}");
        return;
    }
    //const {id}=req.params.id;
    
    //validacion id no existente
    const estudiante1=db.estudiantes.find(
        (est)=>est.id == estt.id)
    if(!estudiante1){
        res.status(400).send("id no existente");
        return;
    }
    
    console.log('Petición PUT recibida desde un cliente');
    console.log(`Datos de estudiante con id: ${req.params.id} recibido`);
    console.log(req.params);
    console.log(req.body);
    //uso splice para eliminar el existente y reemplazarlo por el modificado
    db.estudiantes.splice(req.params.id-1,1,estt);
    //PST.estudiantes.push(estt);
    db.updateDB();
    res.send(`Datos de estudiante con id: ${req.params.id} recibido en el servidor`);
}

estudiantesControl.deleteEstudiante = (req,res)=>{
    const estt={id:parseInt(req.params.id)}
    //validacion id no existente
    const estudiante1=db.estudiantes.find(
        (est)=>est.id == estt.id)
    if(!estudiante1){
        res.status(400).send("id no existente");
        return;
    }
    function elID(persona){
        return persona.id ===req.params.id;
    }
    console.log('Petición DELETE recibida desde un cliente');
    console.log(`Estudiante con id: ${req.params.id} eliminado`);
    console.log(req.params);
    //USO EL SPLICE PARA ELIMINAR ESE OBJETO EN EL INDICE DEL ID -1 
    const resultado = db.estudiantes.findIndex(elID);
    db.estudiantes.splice(resultado,1);
    db.updateDB();
    res.send(`Estudiante con id: ${req.params.id} eliminado en el servidor`);
}

module.exports = estudiantesControl;

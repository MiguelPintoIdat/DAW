const express = require('express');

const app = express();
app.use(express.json());

const hostname='127.0.0.1';

const port = 3000;

const db = require('./db'); // importa la conexión

const cors = require('cors');
app.use(cors());

function esNumero(valor) {
  return !isNaN(valor) && isFinite(valor);
}


var respuesta = {
    correcto : true,
    mensaje : ""
}



app.get('/', (req, res) => {
    var lista;
        
    db.query('Select * From Alumnos', (error,results) => {

        if(error){
            return res.status(500).send('Error al hacer consulta');
        }else{
            lista = results;
            return res.status(200).json(lista);
        }
    });
});

app.post('/Alumnos/Registrar', (req, res) => {

  const { nombre, apellido, edad} = req.body;

    if(!esNumero(edad)){

        respuesta.correcto = false;
        respuesta.mensaje = 'La edad ingresada es inválida: ' + edad;

        return res.status(500).json(respuesta);   
    }

    const sql = 'Insert into Alumnos(Id,Nombre,Apellido,Edad)  VALUES (null,?,?,?)';
    const values = [nombre, apellido, edad];

    db.query(sql, values, (err, results) => {
        if (err) {

            respuesta.correcto = false;
            respuesta.mensaje = 'Error al insertar: ' + err;

            return res.status(500).json(respuesta);
        }else{
            respuesta.correcto = true;
            respuesta.mensaje = 'Usuario insertado con ID: ' + results.insertId;

            return res.status(201).json(respuesta);
        }
    });
});

app.post('/Alumnos/Actualizar', (req, res) => {

  const { id,nombre, apellido, edad} = req.body;

    if(!esNumero(edad)){

        respuesta.correcto = false;
        respuesta.mensaje = 'La edad ingresada es inválida: ' + edad;

        return res.status(500).json(respuesta);   
    }
    if(!esNumero(id)){

        respuesta.correcto = false;
        respuesta.mensaje = 'El ID ingresado es inválido: ' + id;

        return res.status(500).json(respuesta);   
    }
    const sql = 'Update Alumnos Set Nombre = ?, Apellido = ?, Edad = ? Where Id = ?';
    const values = [nombre, apellido, edad, id];

    db.query(sql, values, (err, results) => {
        if (err) {
            respuesta.correcto = false;
            respuesta.mensaje = 'Error al actualizar: ' + err ;

            return res.status(500).json(respuesta);
        }else{

            if(results.affectedRows == 0){
                respuesta.correcto = false;
                respuesta.mensaje = 'No existe el Alumno con Id: ' + id;

                return res.status(500).json(respuesta);
            }else{
                respuesta.correcto = true;
                respuesta.mensaje = 'Se ha actualizado al Alumno con ID: ' + id;

                return res.status(201).json(respuesta);
            }


        }
    });
});

app.delete('/Alumnos/Eliminar/:id',(req,res) => {
    
    const id = req.params.id;

    if(!esNumero(id)){

        respuesta.correcto = false;
        respuesta.mensaje = 'El ID ingresado es inválido: ' + id;

        return res.status(500).json(respuesta);   
    }

    const sql = 'Delete from Alumnos Where Id = ?';
    const values = [id];

    db.query(sql, values, (err, results) => {
        if (err) {
            respuesta.correcto = false;
            respuesta.mensaje = 'Error al eliminar: '+err;

            return res.status(500).json(respuesta);
        }else{
            if(results.affectedRows == 0){
                respuesta.correcto = false;
                respuesta.mensaje = 'No existe el Alumno con Id: ' + id
                return res.status(201).json(respuesta);
            }else{
                respuesta.correcto = true;
                respuesta.mensaje = 'Se ha eliminado al Alumno con ID: ' + id
                return res.status(201).json(respuesta);
            }

        }
    });

});

app.get('/Alumnos/Notas/Reporte', (req, res) => {
    var lista;
     
    const sql = "Select A.Nombre, A.Apellido, AVG(N.Nota) as Promedio From Notas N JOIN Alumnos A ON N.IdAlumno = A.Id GROUP BY A.Nombre, A.Apellido"

    db.query(sql, (error,results) => {

        if(error){
            return res.status(500).send('Error al hacer consulta');
        }else{
            lista = results;
            return res.status(200).json(lista);
        }
    });
});

app.post('/Alumnos/Notas/Registrar', (req, res) => {

  const { nota, idAlumno} = req.body;

    if(!esNumero(idAlumno)){

        respuesta.correcto = false;
        respuesta.mensaje = 'El ID ingresado es inválido: ' + idAlumno;

        return res.status(500).json(respuesta);   
    }

    if(!esNumero(nota)){

        respuesta.correcto = false;
        respuesta.mensaje = 'La nota ingresada es inválida: ' + nota;

        return res.status(500).json(respuesta);   
    }

    const sql = 'Insert into Notas(Id, Nota, IdAlumno) values (null, ? , ? )';
    const values = [nota, idAlumno];

    db.query(sql, values, (err, results) => {
        if (err) {

            if(err.code === 'ER_NO_REFERENCED_ROW_2'){
                respuesta.mensaje = 'No existe Alumno con ID: ' + idAlumno;      
            }else{
                respuesta.mensaje = 'Error al insertar: ' + err;
            }
            respuesta.correcto = false;
            return res.status(500).json(respuesta);
        }else{

            respuesta.correcto = true;
            respuesta.mensaje = 'Nota insertada con ID: ' + results.insertId;
            return res.status(201).json(respuesta);
        }
    });
});


app.listen(port, hostname, () => {
  
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
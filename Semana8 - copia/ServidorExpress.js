
const express = require('express');

const app = express();
app.use(express.json());

const hostname='127.0.0.1';

const port = 3000;
const db = require('./db'); // importa la conexión


/* Endpoint Base    
http://127.0.0.1:3000/     
*/

app.get('/', (req, res) => {
  db.query('SELECT NOW() AS hora_actual', (err, results) => {
    if (err) {
      return res.status(500).send('Error al hacer consulta');
    }
    res.send(`Hora del servidor MySQL: ${results[0].hora_actual}`);
  });
});


/* Endpoint 
http://127.0.0.1:3000/Suma?PrimerNumero=20&SegundoNumero=30
*/
app.get('/Suma', (req, res) => {

    //Obtener los parámetros de la ruta

    const PrimerNumero = parseInt(req.query.PrimerNumero)
    const SegundoNumero = parseInt(req.query.SegundoNumero)

    var Suma = PrimerNumero + SegundoNumero;

    res.status(200).type('text').send('Resultado: ' + Suma);
});


/* Endpoint 
http://127.0.0.1:3000/Suma/10/20
*/
app.get('/Suma/:PrimerNumero/:SegundoNumero', (req, res) => {

    //Obtener los parámetros de la ruta

    const PrimerNumero = parseInt(req.params.PrimerNumero)
    const SegundoNumero = parseInt(req.params.SegundoNumero)

    var Suma = PrimerNumero + SegundoNumero;

    res.status(200).type('text').send('Resultado: ' + Suma);
});


/*
http://127.0.0.1:3000/Multiplicar? QUERY : 3 valores
http://127.0.0.1:3000/Concatenar PARAMAS : 3 valores
http://127.0.0.1:3000/ObtenerLista
*/ 

app.get('/ObtenerLista', (req, res) => {
 
  res.status(200).json(lista);

});

var lista = [
  { id: 1, nombre: 'Juan', edad: 25, nrodocumento:'555555' },
  { id: 2, nombre: 'Ana', edad: 30, nrodocumento:'111111' },
  { id: 3, nombre: 'Luis', edad: 28, nrodocumento:'222222' }
];

/*
http://127.0.0.1:3000/AgregarLista

*/ 
app.post('/AgregarLista', (req, res) => {

  const { id, nombre, edad ,nrodocumento} = req.body;

  // Validar que lleguen los campos
  if (!id || !nombre || !edad || !nrodocumento) {
    return res.status(400).json({ error: 'Faltan campos id, nombre, edad o documento' });
  }

  if(lista.some(x=>x.id == id)){
        return res.status(400).json({ error: 'El Id ingresado ya existe' });
  }
  if(lista.some(x=>x.nrodocumento == nrodocumento)){
        return res.status(400).json({ error: 'El nrodocumento ingresado ya existe' });
  }

  // Agregar el nuevo objeto a la lista
  lista.push({ id, nombre, edad, nrodocumento });

  // Devolver el objeto agregado y la lista actualizada
  res.status(201).json(
        {
            mensaje: 'Objeto agregado correctamente'
        }
    );
});

/*
http://127.0.0.1:3000/Eliminar/3
*/

app.delete('/Eliminar/:id',(req,res) => {

    const id = parseInt(req.params.id)

    const index = lista.findIndex(item => item.id === id);


    if(index == -1){

        return res.status(400).json({ error: 'No existe el Id ingresado.' });

    }else{

        lista.splice(index, 1);

        res.status(201).json(
                {
                    mensaje: 'Objeto eliminado correctamente'
                }
            );

    }

});

/*
1. Agregar "Telefono" a la estructura (Listar / Agregar)
2. [En Método Agregar] Validar que no se repita el Teléfono
3. Nuevo Delete: Eliminar de la lista por Número de Documento
*/

app.listen(port, hostname, () => {
  
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
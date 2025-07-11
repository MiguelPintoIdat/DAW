// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',      // o IP del servidor MySQL
  user: 'root',     // por ejemplo: 'root'
  password: '123456',
  database: 'NodeDb'
});

connection.connect(err => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conexión a MySQL establecida');
});

module.exports = connection;

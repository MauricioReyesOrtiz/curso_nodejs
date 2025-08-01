// llamar al modulo fs/promises
const fs = require('node:fs/promises');

// leer el archivo creado promesa1.txt
fs.readFile('./promesa1.txt')
.then(datos => {
    console.log(datos.toString());
})
.catch(error => {
    console.log(error);
})

console.log('ultima linea del programa');
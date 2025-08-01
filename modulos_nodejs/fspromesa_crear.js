// llamar al modulo fs/promises
const fs = require('node:fs/promises');

// crear archivo promesa1.txt
fs.writeFile('./promesa1.txt', 'linea 1\nlinea 2\n creado con promesas.')
.then(() => {
    console.log('el archivo de texto fue creado empleando promesas');
})
.catch(error => {
    console.log(error);
})

console.log('ultima linea del programa');

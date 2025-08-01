// requerir modulos fs/promises
const fs = require('node:fs/promises');

// metodo readdir para mostrar todos los archivos del directorio
fs.readdir('./')
.then(archivos => {
    for(let archivo of archivos) {
        console.log(archivo);
    }
})
.catch(error => {
    console.log(error);
})
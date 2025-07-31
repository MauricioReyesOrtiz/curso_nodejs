//modulos para administrar el sistema de archivos

// modulo 'fs'
const filesystem = require('node:fs');

filesystem.writeFile('./holamundo.txt', 'linea1: hola mundo\nlinea2: bienvenido Mauricio.', error => {
    if (error) {
        console.log(error);
    }else {
        console.log('el archivo fue creado exitosamente');
    }
})

console.log('esta es la ultima linea codificada del programa');
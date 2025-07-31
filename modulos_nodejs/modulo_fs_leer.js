//modulo fs

// leer archivo forma1:
const filesystem = require('node:fs');

// filesystem.readFile('./holamundo.txt', (error, datos) => {
//     if (error) {
//         console.log(error);
//     }else {
//         console.log(datos.toString());//toString convierte en formato texto
//     }
// })

// console.log('ultima linea del programa');

// --------------------------------

// leer archivo forma2:
function leerArchivo(error, datos) {
    if(error) {
        console.log(error);
    }else {
        console.log(datos.toString());
    }
}

// leyendo el archivo
filesystem.readFile('./holamundo.txt', leerArchivo);
console.log('ultima linea del programa');
const fs = require('fs');

//codigo asincrono y funcion collback
fs.writeFile('./texto.txt', 'linea uno', function(err) {
    if(err) {
        console.log(err);
    }
    console.log('archivo creado');
});

console.log('ultima linea de codigo');
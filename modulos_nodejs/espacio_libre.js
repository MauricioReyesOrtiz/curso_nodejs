const os = require('node:os');

console.log('memoria libre:' + os.freemem());
const vect = [];
for(let f = 0; f < 1000000; f++) {
    vect.push(f);
}

console.log('memoria libre despues de crear el vector:' + os.freemem);
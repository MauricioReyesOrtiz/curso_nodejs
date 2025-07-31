const os = require('node:os');

console.log('sistema operativo:' + os.platform());
console.log('version del SO:' + os.release());
console.log('memoria total:' + os.totalmem() + ' bytes');
console.log('memoria libre:' + os.freemem() + ' bytes');
console.log('Arquitectura CPU: ' + os.arch);
console.log('numeros de procesadores logicos:' + os.cpus().length);
os.cpus().forEach(cpu => {
    console.log('nombre: ' + cpu.model);
    console.log('nucleos: ' + cpu.cores);
})
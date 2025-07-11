const os = require('os');

console.log(os.platform());//muestra plataforma
console.log(os.release());//version plataforma
console.log('free memoria: ', os.freemem(), ' bytes');//memoria libre
console.log('Total memoria: ', os.totalmem(), ' bytes');//memoria total
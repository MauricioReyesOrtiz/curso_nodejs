const Math = {};//creando un objeto

function add(x1, x2){
    return x1 + x2;
}

function substract(x1, x2){
    return x1 - x2;
}

function multiply(x1, x2){
    return x1 * x2;
}

function divide(x1, x2){
    if(x2 == 0) {
        console.log('No se puede dividir por 0');
    }else {
        return x1 / x2;
    }
}



//--exportando propiedades de un objeto
// exports.add = add;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

//llamando a las funciones desde el objeto
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

//exportando el objeto Math
module.exports = Math;//permite exportar objeto,funciones,etc.

//exportando una funcion hello
function hello (name) {
    console.log('Hola', name);
}

module.exports = hello;

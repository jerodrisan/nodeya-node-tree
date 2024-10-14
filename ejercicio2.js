//MODULOS. 

const sayHi = require('./matematica');
const sumar =require('./matematica');
const restar = require('./matematica');
const dividir = require('./matematica');
const PI = require('./matematica');


sayHi('manolo');
console.log('La suma de 2+2='+ sumar(2,2));
console.log('La resta de 4-1='+ restar(4,1));
console.log('La división de 6/3='+ dividir(6,3));
//console.log('El valor de PI='+ PI);


// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(module)  // MODULE {id: , path: , exports:{}, ...} . Si nos fijamos bien module.exports es un objeto 
                    //// module     - info about current module (file)
                    //Al exportar metemos en el objeto la info y luego la recuperamos en el require . Es digamos un objeto de ambito global

console.log(__dirname) //path to current directory : C:\Users\chukk\Desktop\nodeya
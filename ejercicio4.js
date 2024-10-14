//PATH 


const path = require('path')

console.log(path.sep)  // salida: \         //Sep == separador

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)       // salida: \content\subfolder\test.txt

const base = path.basename(filePath)
console.log(base)           // salida test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)       //salida : C:\Users\chukk\Desktop\nodeya\content\subfolder\test.txt


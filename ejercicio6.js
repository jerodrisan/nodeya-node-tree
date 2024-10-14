//4 - Módulo para administrar el sistema de archivos: fs (Lectura)

const fs=require('fs');
/*
fs.readFile('./archivo1.txt', (error,datos) => {
    if (error)
      console.log(error);
    else
      console.log(datos.toString());
  });
  */
console.log('última línea del programa');

//o bien
//fs.readFile('./archivo.txt', leer)
function leer(error,datos){
    if (error)
    console.log(error);
  else
    console.log(datos.toString());
}

//La mejor forma de hacerlo es no usar el metodo .toString() e indicar que lea el archivo en uft8
//En caso contrario la salida sera tipo: <Buffer 6c c3 ad 6e 65 61 20 31 0a 4c c3 ad 6e 65 61 20 32>
fs.readFile('./archivo1.txt','utf8', (error,datos) => {
  if (error)
    console.log(error);
  else
    console.log(datos);
});

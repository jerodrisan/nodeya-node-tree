//4 - Módulo para administrar el sistema de archivos: fs (Escritura) de forma asincrona :

const fs=require('fs');

fs.writeFile('./archivo2.txt', 'línea 1\nLínea 2', error => {
    if (error)
      console.log(error);
    else
      console.log('El archivo fue creado');
  });
  
  console.log('última línea del programa');



  //fs (Escritura y lectura ) de forma SINCRONA :
  /*
  const { readFileSync, writeFileSync } = require('fs')
  console.log('start')
  const first = readFileSync('./content/first.txt', 'utf8') //creamos previamente dsde el panel izquierdo ese directorio con los dos txt
  const second = readFileSync('./content/second.txt', 'utf8')

  console.log(first, second); //start  Hello this is the first file  Hello this is the second file 

  writeFileSync(  
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }
  )
    //Si no esta lo crea y si esta lo sobreescribe. 
    */
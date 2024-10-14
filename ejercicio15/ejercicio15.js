
//13 - npm (node package manager)
// Instalamos paquete mime a traves de nmp : npm install mime


const http=require('http');
const url=require('url');
const fs=require('fs');

const mime=require('mime'); //instalacion de mime en carpeta local : primero npm init (crea el package.json local ) y luego npm install mime 

/* Usaremos el paquete mime 
const mime = {
   'html' : 'text/html',
   'css'  : 'text/css',
   'jpg'  : 'image/jpg',
   'ico'  : 'image/x-icon',
   'mp3'  :	'audio/mpeg3',
   'mp4'  : 'video/mp4'
};
*/
const servidor=http.createServer((pedido, respuesta) => {
    const objetourl = url.parse(pedido.url,true);
    let camino='static'+objetourl.pathname;
    if (camino=='static/')
      camino='static/index.html';
    fs.stat(camino, error => {
      if (!error) {
        fs.readFile(camino, (error,contenido) => {		  
          if (error) {
            respuesta.writeHead(500, {'Content-Type': 'text/plain'});
            respuesta.write('Error interno');
            respuesta.end();					
          } else {
            const tipo=mime.getType(camino);
            console.log(tipo); //sale por orden: text/html, text/css , image/jpeg, audio/mpeg, video/mp4
            respuesta.writeHead(200, {'Content-Type': tipo});
            respuesta.write(contenido);
            respuesta.end();
          }
        });
      } else {
        respuesta.writeHead(404, {'Content-Type': 'text/html'});
        respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');		
        respuesta.end();
      }
    });
  });
  
  servidor.listen(8888);
  
  console.log('Servidor web iniciado');
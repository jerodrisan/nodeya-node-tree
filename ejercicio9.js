

//7 - Servidor web con Node.js que sirve páginas estáticas HTML

const http=require('http');
const url=require('url');
const fs=require('fs');


const servidor=http.createServer( (pedido,respuesta) => {
    const objetourl = url.parse(pedido.url,true);
    console.log(objetourl.pathname);  //Poniendo localhost:8888, saldria el path : /
    let camino='static'+objetourl.pathname;
    console.log(camino) //Poniendo localhost:8888, saldria el path : /static

    if (camino=='static/')
      camino='static/index.html';
    //procedemos a verificar si existe el archivo HTML, el método stat tiene como primer parámetro el nombre del
    // archivo que debemos indicarlo con todo el camino y el segundo parámetro es una función anónima que llega como parámetro 
    //si hubo o no un error con la existencia del archivo:  
    fs.stat(camino, error => {  //Segun documentacion no es recomendable usar stat. 
      if (!error) {
        
        fs.readFile(camino, (error,contenido) => {
          if (error) {
            respuesta.writeHead(500, {'Content-Type': 'text/plain'});
            respuesta.write('Error interno');
            respuesta.end();					
          } else {
            respuesta.writeHead(200, {'Content-Type': 'text/html'});
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
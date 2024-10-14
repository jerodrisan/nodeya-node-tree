
//12 - Recuperar datos de los parámetros de una url (GET)

const http=require('http');
const url=require('url');
const fs=require('fs');

const mime = {
   'html' : 'text/html',
   'css'  : 'text/css',
   'jpg'  : 'image/jpg',
   'ico'  : 'image/x-icon',
   'mp3'  :	'audio/mpeg3',
   'mp4'  : 'video/mp4'
};

const servidor=http.createServer((pedido, respuesta) => {
    const objetourl = url.parse(pedido.url);
    let camino='public'+objetourl.pathname;
    if (camino=='public/')
      camino='public/index.html';
    encaminar(pedido,respuesta,camino);
  });
  
  servidor.listen(8888);

  
  function encaminar (pedido,respuesta,camino) {   
    switch (camino) {
      case 'public/listanumeros': {
        listar(pedido,respuesta);
        break;
      }	
      case 'public/listadotabla': {
        listarTablaMultiplicar(pedido,respuesta);
        break;
      }			
      default : {  
          fs.stat(camino, error => {
          if (!error) {
            fs.readFile(camino, (error,contenido) => {
              if (error) {
                respuesta.writeHead(500, {'Content-Type': 'text/plain'});
                respuesta.write('Error interno');
                respuesta.end();					
              } else {
                const vec = camino.split('.');
                const extension=vec[vec.length-1];
                const mimearchivo=mime[extension];
                respuesta.writeHead(200, {'Content-Type': mimearchivo});
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
      }
    }	
  }

  function listar(pedido,respuesta) {
    const info = '';
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
    let pagina='<!doctype html><html><head></head><body>';
    for(let f=1;f<=20;f++) {
      pagina+=`<a href="listadotabla?num=${f}">${f}</a><br>`;
    }
    pagina+='</body></html>';
    respuesta.end(pagina);
  }

  /*
        Como vemos utilizamos el objeto url llamando al método parse y pasando dos parámetros:
         pedido.url y el valor true. Mediante el objeto que nos devuelve accedemos a la propiedad query
          y en este objeto tenemos una propiedad llamada igual a nuestro parámetro 'num'.
           Si tiene más parámetros los accedemos de la misma forma.
  */
  
  function listarTablaMultiplicar(pedido,respuesta) {
    const valor=url.parse(pedido.url,true).query.num;
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
    let pagina='<!doctype html><html><head></head><body>';
    for(let f=1;f<=10;f++) {
      pagina+=`${valor}*${f}=${valor*f}<br>`;
    }		   
    pagina+='</body></html>';
    respuesta.end(pagina);
  }
  
  
  console.log('Servidor web iniciado');
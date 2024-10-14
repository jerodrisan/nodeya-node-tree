
//10 - Recuperar datos de un formulario HTML mediante Node.js (POST)

const http=require('http');
const url=require('url');
const fs=require('fs');
const querystring = require('querystring');


const mime = {
    'html' : 'text/html',
    'css'  : 'text/css',
    'jpg'  : 'image/jpg',
    'ico'  : 'image/x-icon',
    'mp3'  : 'audio/mpeg3',
    'mp4'  : 'video/mp4'
 };

 const servidor=http.createServer((pedido ,respuesta) => {
    const objetourl = url.parse(pedido.url,true);
  let camino='public'+objetourl.pathname;
  if (camino=='public/')
    camino='public/index.html';
  console.log('desde create server, pedido: '+ pedido.pathname + ' ,camino:  '+camino);  
  encaminar(pedido,respuesta,camino);
});

servidor.listen(8888);

function encaminar (pedido,respuesta,camino) {
    console.log('desde funcion encaminar, pedido: '+pedido+' ,camino: '+camino);
    switch (camino) {
      case 'public/recuperardatos': {
        recuperar(pedido,respuesta); //recuperamos los datos del pedido (los datos del formulario POST)
        break;
      }	
      default : {  
        fs.stat(camino, error => {
          if (!error) {
          fs.readFile(camino,(error, contenido) => {
            if (error) {
              respuesta.writeHead(500, {'Content-Type': 'text/plain'});
              respuesta.write('Error interno');
              respuesta.end();					
            } else {
              const vec = camino.split('.');
              const extension=vec[vec.length-1];
              const mimearchivo=mime[extension];
              console.log('salida de formulario principal :' +mimearchivo+' , contenido en html :'+contenido);
              respuesta.writeHead(200, {'Content-Type': mimearchivo}); //text/html
              respuesta.write(contenido);  //El contenido es el propio formulario en tipo html : text/html
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

   /*   El objeto 'pedido' tiene un método llamado on. Debemos llamar este método dos veces, la primera pasando un string con el valor 'data'
        y una función anónima que se irá llamando a medida que lleguen los datos al servidor desde el navegador:
        pedido.on('data', datosparciales => {
                info += datosparciales;
            });
    Como vemos a medida que van llegando los datos los vamos concatenando en una variable llamada 'info'.
    Cuando terminan de llegar todos los datos se ejecuta la función anónima que le pasamos al método on en la llamada con el string 'end':
    En esta función anónima la variable info contiene todos los datos del formulario con una estructura similar a:
    nombre=juan&clave=123456
*/
  function recuperar(pedido,respuesta) {
    let info = '';
    pedido.on('data', datosparciales => {
      info += datosparciales;
    });
    pedido.on('end', () => {
      const formulario = querystring.parse(info);
      respuesta.writeHead(200, {'Content-Type': 'text/html'});
      const pagina=
        `<!doctype html><html><head></head><body>
         Nombre de usuario:${formulario['nombre']}<br>
        Clave:${formulario['clave']}<br>
        <a href="index.html">Retornar</a>
        </body></html>`;
      respuesta.end(pagina);
    });	
  }
  
  console.log('Servidor web iniciado');
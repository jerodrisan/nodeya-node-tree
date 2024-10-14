 //6 Modulo http:datos que envía el navegador.

 const http=require('http');
 const url=require('url');
  //http://localhost:8888/carpeta1/pagina1.html?parametro1=10&parametro2=20

 const servidor=http.createServer((pedido,respuesta) => {
    const objetourl = url.parse(pedido.url,true);
    console.log('camino completo del recurso y parametros:'+objetourl.path);        //  /carpeta1/pagina1.html?parametro1=10&parametro2=20  */
    console.log('solo el camino y nombre del recurso     :'+objetourl.pathname);    //  /carpeta1/pagina1.html
    console.log('parametros del recurso                  :'+objetourl.search);      //  ?parametro1=10&parametro2=20   
    const obj_query = objetourl.query;
    console.log(`parametro1 del recurso:   ${obj_query.parametro1}`);               //devuelve 10
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
    respuesta.write(`<!doctype html>
    <html>
      <head>
      </head>
      <body>
        <h1>Hola mundo</h1>
        <h2>el segundo parametro del recurso es ${obj_query.parametro2}</h2>
      </body></html>`);
    respuesta.end();
});  
servidor.listen(8888);  
console.log('Servidor web iniciado');


/*
  var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
  var q = url.parse(adr, true);
  console.log(q.host); //returns 'localhost:8080'
  console.log(q.pathname); //returns '/default.htm'
  console.log(q.search); //returns '?year=2017&month=february'

  var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
  console.log(qdata.month); //returns 'february'
*/


 
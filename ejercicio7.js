//5 - Módulo http

const http=require('http');

const servidor=http.createServer((pedido,respuesta) => {
    
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
    respuesta.write(`<!doctype html><html><head></head>
                     <body><h1>Sitio en desarrollo</h1></body></html>`);
    respuesta.end();
  });
  
  servidor.listen(8888);
  
  console.log('Servidor web iniciado');


  //Server 2 extraido de John smilga: 
/*
  const server = http.createServer((req, res) => {
    //   if (req.url === '/') {
    //     res.end('Welcome to our home page')
    //   }
    //   if (req.url === '/about') {
    //     res.end('Here is our short history')
    //   }
    //   res.end(`
    //   <h1>Oops!</h1>
    // <p>We can't seem to find the page you are looking for</p>
    // <a href="/">back home</a>
    //   `)
    // ###################################
    // ###################################
    //
    //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
    // SWITCH TO IF, ELSE IF, ELSE (BELOW)
    // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
    if (req.url === '/') {
      res.end('Welcome to our home page')
    } else if (req.url === '/about') {
      res.end('Here is our short history')
    } else {
      res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>
      `)
    }
  })
  
  server.listen(5000)
  */
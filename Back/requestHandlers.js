const querystring =require("querystring");

function iniciar(response) {
    console.log("Manipulador de petición 'iniciar' fue llamado.");
  
    const body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    
   
    '<input type"email" name="text" value="email"/>'+
    '<input type"password" name="password" value="password"/>'+

    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

  }
  
  function subir(response, dataPosteada) {
    console.log("Manipulador de Peticion 'subir' fue llamado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Tu enviaste: " + dataPosteada);
    response.end();
  }

exports.iniciar = iniciar;
exports.subir = subir;


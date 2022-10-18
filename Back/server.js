const http= require("http");
const url = require("url");

function iniciar(route, handle) {
  function onRequest(request, response) {
      const dataPosteada ="";
      const pathname = url.parse(request.url).pathname;
    console.log("Petición Recibida.");
    request.setEncoding("utf8");

    request.addListener("data", function(trozoPosteado) {
      dataPosteada += trozoPosteado;
      console.log("Recibido trozo POST '" + trozoPosteado + "'.");
});

request.addListener("end", function() {
  route(handle, pathname, response, dataPosteada);
});


    
  }

  http.createServer(onRequest).listen(3000);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;
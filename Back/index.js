const server = require("./server");
const router = require("./router");
const requestHandlers = require("./requestHandlers");

const handle = {}

handle["/"]= requestHandlers.iniciar;
handle["/iniciar"]=requestHandlers.iniciar;
handle["/subir"]= requestHandlers.subir;

server.iniciar(router.route, handle);
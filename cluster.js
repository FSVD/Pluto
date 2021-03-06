var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('Proceso ' + worker.process.pid + ' terminado');
  });
} else {

    // Punto de acceso de la aplicacion.
    require("./bin/www");
}
var express = require('express');

module.exports = function () {
  var app = express();
  var port = Number(process.env.port || 3000);
  app.set('port', port);
  app.use(express.static('./src'));
  return app;
}
var express = require("express");
var server = express();
var port = process.env.PORT || 3000;
// middleware
server.use(express.static(__dirname + "/public"));
// routes
server.use("*", function(req, res) {
  // serve file
});
server.listen(port);

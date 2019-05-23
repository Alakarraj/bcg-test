var express = require("express");
var server = express();

// middleware
server.use(express.static(__dirname + "/public"));

// routes
server.use("*", function(req, res) {
  // serve file
});

var port = 80;
server.listen(port, function() {
  console.log("server listening on port " + port);
});

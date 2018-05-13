var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs');
var mqtt = require('mqtt');
var io = require('socket.io')(http);

var config = require('./config');

const PORT = 3000;
const uuidv4 = require('uuid/v4');

var config = require('./config');
var CAfile = [fs.readFileSync(__dirname + '/cert/ptNetSuite_mqtt_ca.crt')];

app.use(express.static('templates'));

var options = config.options;
options.clientId = options.username + "::" + uuidv4();
options.ca = CAfile;

var topics = config.topics;

var ns = mqtt.connect(options);

io.on('connection', function(socket){
  console.log('a user connected');
});

ns.on('connect', function () {
  console.log("Connected to " + config.options.host);

  for(topic of topics) {
    ns.subscribe(topic);
  }
});

ns.on('message', function (topic, message) {
  var msg = JSON.parse(message.toString());

  console.log(msg);

  if('payload' in msg) {
    io.emit('payload', msg.payload);
  }
});

app.get('/', function(req, res){
  res.sendFile('index.html');
});

http.listen(PORT, function(){
  console.log('listening on port ' + PORT);
});

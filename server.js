require('dotenv').config()
var express = require("express")
var app = express()
var cors = require("cors")
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(() => {
    socket.emit('number', parseInt(Math.random() * 10));
  }, 1000);

});

var port = process.env.port || 3001;


app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


http.listen(port, () => {
  console.log("Listening on port http://localhost/",port);
});
require('dotenv').config();

const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { socket } = require('./sockets/socket')

app.use(express.static(__dirname + "/public"));


server.listen(process.env.PORT);
console.log(`Server running on http://localhost:${process.env.PORT}`);
socket(io);

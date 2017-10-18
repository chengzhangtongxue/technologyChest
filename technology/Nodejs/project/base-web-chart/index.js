const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static('./'));

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('disconnect',() => {
        console.log('user disconnect');
    });
    socket.on('chat message',msg => {
        console.log('message=>' + msg);
        io.emit('chat message',msg);
    });
});

http.listen(port,() => {
    console.log(`listening port localhost:${port} ...`);
});
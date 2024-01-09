let express = require('express');
let app = express();
let port = process.env.port || 3000;
const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);
app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
io.on('connection',(socket)=>{
    console.log('client is connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000)
});

http.listen(port, ()=>{
    console.log('express server started');
});
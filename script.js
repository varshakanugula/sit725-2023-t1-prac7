let socket = io();
socket.on('number',(msg)=>{
    console.log('Random Number: ' + msg);
});
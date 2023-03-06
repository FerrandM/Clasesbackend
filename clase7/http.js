const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req);
    res.end('Hola a la primera app server')
})

server.listen(8080,err=>{
    console.log('escuchando el puerto 8080');
})
const express = require('express')

const handlebars = require('express-handlebars')
const routerView = require('./routes/view.router')

const { Server } = require('socket.io')


const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/virtual' ,express.static( './public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

app.use('/', routerView)

const httpServer = app.listen(PORT, err=>{
    if(err){
        console.log(err);
    }else{
        console.log(`descuchando en el puerto ola ${httpServer.address().port}`);
    }
})

const socketServer = new Server(httpServer)

socketServer.on('connection', socket=>{
    console.log('ola nuebo')
    socket.on('disconnect', ()=>{
        console.log('disconnected');
    })
})
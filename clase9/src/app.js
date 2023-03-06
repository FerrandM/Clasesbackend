const express = require('express')
const cookie = require('cookie-parser')
const userRouter = require('./routes/users.router.js')
const productosRouter = require('./routes/products.router.js')
const { uploader } = require('./utils.js')
// import router2 from "../routes/products.router.js";

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))
console.log(__dirname);
app.use('/virtual' ,express.static( './public'))
app.use(cookie())

app.use((req,res,next)=>{
    console.log('Time:', Date())
    next();
})
function mid1(req,res,next){
    req.dato1='dato uno'
    next()
}
function mid2(req,res,next){
    req.dato2='dato dos'
    next()
}

app.use('/api/usuarios', mid1, userRouter )
app.use('/api/productos', mid1, mid2, productosRouter)

app.post('/single', uploader.single('myfile'),(req, res)=>{
    res.status(200).json({
        message: 'se a subido con éxito'
    })
})

app.use((err, req,res,next)=>{
    console.log(err);
    res.status(500).send('todomal')
})

app.listen(PORT, err=>{
    if(err){
        console.log(err);
    }else{
        console.log('escuchando el puerto 8080');
    }
})

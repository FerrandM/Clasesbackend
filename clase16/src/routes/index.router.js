const { Router } = require('express')
//-------Rutas--------------
const productRouter = require('./productos.router')
//--------------------------

const router = Router()

router.get('/', (req, res)=>{
    res.send('Ruta raíz')
})


//Ruta productos
router.use('/api/products', productRouter)



module.exports = router
//---------Imports---------
const express = require('express')


//---------Router----------
const indexRoute = require('./routes/index.router.js')
//-------------------------


//---------Sets------------
const app = express()
const PORT =  8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
//------------------------



app.use(indexRoute)

app.use('/', (req, res)=>{
    res.send('Corriendo')
})

 


app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }
    console.log('servidor en', PORT);
})
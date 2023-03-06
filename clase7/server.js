//const express = require('express')

//para usar módulos como react se tiene que escribir type: module en el package.json

import express from "express";

const app = express()
const PORT = 8080
const arrayUser = [
    {id: '1', nombre: 'nombre 1', apellido: 'apellido 1', genero: 'm'},
    {id: '2', nombre: 'nombre 2', apellido: 'apellido 2', genero: 'f'},
    {id: '3', nombre: 'nombre 3', apellido: 'apellido 3', genero: 'f'},
    {id: '4', nombre: 'nombre 4', apellido: 'apellido 4', genero: 'm'},
    {id: '5', nombre: 'nombre 5', apellido: 'apellido 5', genero: 'm'},
    {id: '6', nombre: 'nombre 6', apellido: 'apellido 6', genero: 'm'},
    {id: '7', nombre: 'nombre 7', apellido: 'apellido 7', genero: 'f'}
]

//GET
app.get('/', (req, res)=>{
    res.send(arrayUser)
})
app.get('/paramsID/:idUser', (req, res)=>{
    const {idUser} = req.params
    const user = arrayUser.find(usuario => usuario.id===idUser)
    if(!user){
        return res.send('no existe el user')
    }
    res.send(user)
})

app.get('/saludo', (req,res)=>{
    res.send('Hola saludos')
})
app.get('/bienvenida', (req,res)=>{
    res.send('<h1 style=color:blue>Hola Mundo</h1>')
})
app.get('/usuario', (req,res)=>{
    res.send({
        nombre: 'oli',
        apellido: 'ola'
    })
})
app.get('/params/:parametroDinamico', (req, res)=>{
    console.log(req.params.parametroDinamico);
    res.send('Params')
})
app.get('/params2/:nombre/:id', (req, res)=>{
    console.log(req.params);
    const {nombre, id} = req.params
    res.send({
        nombre,
        id
    })
})
//___________________________________________________________________

//USE --- req.query

app.use(express.urlencoded({extended:true}))



app.get('/query', (req, res)=>{
    console.log(req.query);
    //const { nombre, apellido } = req.query (query?nombre=fede&apellido=nose)
    //query?genero=f *ejemplo mostrado*
    const { genero } = req.query

    //comsulta para cuando genero no está definido o distinto de f y m
	if(!genero || (genero!='m' &&  genero!='f')){
	        return res.send({arrayUser})
	}
    
    let userFilter = arrayUser.filter(user => user.genero === genero)
    res.send({
        userFilter
    })
})


//___________________________________________________________________
app.listen(PORT, err=>{
    if (err) {
        console.log(err);
    }else{
        console.log(`Escuchando oli el puerto ${PORT}`);
    }
}) 
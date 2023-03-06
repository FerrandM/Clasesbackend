import express, { response } from "express";

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
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/api/usuarios', (req, res) =>{
    res.status(200).send(arrayUser)
})
app.put('/api/usuarios/:userID', (request, res)=>{
    const {userID}  = request.params
    const index  = arrayUser.findIndex(user => user.id === userID)
    if(index === -1){
        return res.status(400).send({message:'user not found'})
    }

    let user = request.body
    if(!user.nombre || !user.apellido){
        console.log(arrayUser);
        return (
            res.status(400).send({message:'pasá los datos gil'})
        )}
    console.log(user);
    arrayUser.push(user)
    arrayUser[index] = user
    res.status(201).send({
        user:user,
        message: 'user creado y usuario modificado'
    })
    console.log(arrayUser);
})



app.listen(PORT, err=>{
    if(err){
        console.log(err);
    }else{
        console.log('escuchando el puerto 8080');
    }
})

app.delete('/api/usuarios/:userID', (req, res)=>{
    const { userID } = req.params
    let arraySize = arrayUser.length
    console.log(arraySize);
    let user = arrayUser.filter(user => user.id != userID)
    console.log(user.length);
    if (user.lenght === arraySize) {
        res.status(404).send({message:'usuario no encontrao'})
    }
    res.status(200).send({message:'usuario eliminao', user })
})
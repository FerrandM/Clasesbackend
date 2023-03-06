const { Router, response } = require('express')
const Users = require('../models/user.model.js')

const routers = Router() 


routers.get('/', async(req, res)=>{
    try {
        let users = await Users.find({})
        // if(!users){
        //     console.log('collection no encontrada');
        // }
        res.status(200).send({
            result: 'success',
            users: users
        }) 
    } catch (error) {
        console.log(error);
    }
    
})

routers.get('/:id', (request, response)=>{
    const {id} =request.params
    response.status(200).send(id)
})



routers.post('/', async(req, res)=>{
    try {
        let user = req.body

        if(!user.nombre || !user.apellido ||!user.email){
            console.log(arrayUser);
            return (
                res.status(400).send({message:'pasá los datos gil'})
            )}
        
        let result = await Users.create({
            nombre: user.nombre,
            apellido: user.apellido,
            email: user.email
        })

        //validación
        res.status(201).send({
            status: 'success',
            result
        })
    } catch (error) {
        console.log(error);
    }

    
})

routers.put('/:uid', async(req, res)=>{

    const { uid } = req.params


    let { nombre, apellido, email } = req.body
    if(!nombre || !apellido || !email){
        return res.status(400).send({message: 'pasa los datos gil'})
    }

    let result = await Users.updateOne({_id: uid}, { nombre, email} , {new: true})
    res.status(201).send({
        status: 'succes',
        result
    })
})


routers.delete('/:uid', async(req, res)=>{
    const { uid } = req.params
    await Users.deleteOne({_id: uid})


    res.status(200).send({
        status: 'success',
        result: true
    })
})

module.exports = routers
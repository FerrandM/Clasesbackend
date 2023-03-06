const fs = require('fs')
const crypto = require('crypto')
const path = './file/Usuario.json'

class ManagerUsuarios{
    consultarUsuarios = async()=>{
        try {
            if(fs.existsSync(path)){
                const data = await fs.promises.readFile(path,'utf-8')
                const users = JSON.parse(data)
                return users
            }else{
                await fs.promises.writeFile(path, '[]', 'utf-8')
                return []
            }
        } catch (error) {
            console.log(error);
        }
    }
    crearUsuarios = async (usuarios)=>{
        const users = await this.consultarUsuarios()
        if(users.length === 0){
            usuarios.id = 1
        }else{
            usuarios.id = users[users.length-1].id +1
        }

        usuarios.salt = crypto.randomBytes(128).toString('base64')
        usuarios.password = crypto.createHmac('sha256', usuarios.salt).update(usuarios.contra).digest('binary')

        // crypto.randomBytes(128).toString('base64')
        // usuarios.contra = crypto.createHmac('sha256', 'secret').update(users.contra).digest('binary') 

        users.push(usuarios)
        await fs.promises.writeFile(path, JSON.stringify(users, 'replacer', '\t'))
        return usuarios
    }

    validarUsuario = async(username, contra) =>{
        const usuarios = await this.consultarUsuarios()
        const usuarioIndex = usuarios.findIndex(u=>u.nombre_usuario === username)
        if (usuarioIndex===-1){
            console.log('error, usuario no encontrado');
            return
        }
        const usuario = usuarios[usuarioIndex]
        const newHash = crypto.createHmac('sha256', usuario.salt).update(contra).digest('binary')

        if(newHash === usuario.password){
            console.log('logueao');
        }else{
            console.log('invalid');
        }
    }
}

module.exports = ManagerUsuarios
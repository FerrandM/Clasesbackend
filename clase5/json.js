const usuarios = [
    {id:1, name: 'Federico', edad: 19},
    {id:2, name: 'Federico III', edad: 109},
    {id:3, name: 'Federico IV', edad: 900}
]

let usuariosString = JSON.stringify(usuarios, 'replacer','\t')
console.log(usuariosString);

let usuariosParse = JSON.parse(usuariosString)
console.log(usuariosParse);



//archivos externos 

const fs = require('fs')

const archManager = async() =>{
    try {
        let arch = await fs.promises.readFile('./Usuarios.json', 'utf-8')
        console.log(arch);
        console.log(JSON.parse(arch));
    } catch (error) {
        
    }
}
archManager()
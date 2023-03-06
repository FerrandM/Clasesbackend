const fs = require('fs')

if (fs.existsSync('./data.txt')===false){
    fs.writeFileSync('./data.txt', 'Esto es un ejemplo', 'utf-8')
}else {
    console.log('ya existe el archivo');
}

fs.appendFileSync('./data.txt',  '\n esto es un agregado', 'utf-8')


const archivo = fs.readFileSync('./data.txt', 'utf-8')
console.log(archivo);
fs.unlinkSync('./data.txt')


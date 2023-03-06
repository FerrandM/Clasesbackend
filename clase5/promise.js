const fs = require('fs')

fs.promises.writeFile('./data.txt', 'esto es un ejemplo', 'utf-8')
    .then(()=>console.log('Termino de esribir'))
    .catch((err) => console.log(err))
    //.finally

const manejoArch = async () =>{

    //crear archivo

    try {
        await fs.promises.writeFile('./data.txt', 'texttextetetetetet','utf-8')
        console.log('terminó de escribir 2:P');
    } catch (error) {
        console.log(error);
    }


    //leer archivo

    try {
        let archive = await fs.promises.readFile('./data.txt', 'utf-8')
        console.log('terminó de leer: ', archive);
    } catch (error) {
        console.log(error);
    }


    //agregar al archivo

    try {
        await fs.promises.appendFile('./data.txt', 'text agregado :C \n', 'utf-8')
        console.log('se agregó nuevo texto al archivo :)');
    } catch (error) {
        console.log(error);
    }


    //eliminar archivo

    try {
        await fs.promises.unlink('./data.txt')
        console.log('archivo eliminado');
    } catch (error) {
        console.log(error);
    }
 
}

manejoArch()
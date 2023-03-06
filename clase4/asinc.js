function escribirArchivo (texto, cb){
    console.log(texto)
    setTimeout(()=>{
        cb()
    }, 3000)
}

escribirArchivo('hola mundo', ()=>{
    console.log('termine de escribir el archivo');
})

console.log('fin del programa');

const divi = (divisor, dividendo) =>{
    return new Promise ((res, rej) => {
        setTimeout(()=>{
        if(divisor === 0){
            rej('indetermined')
        } 
        else{
            res(dividendo/divisor)
        }}, 2000)
    })
}


async function empezarDividir() {
    try{
        let result = await divi(2,2)
        console.log(result);
    }
    catch (error){
        console.log(error);
    }
}

empezarDividir()


let contador = ()=>{
    let counter = 1
    console.log('realizando operación solicitada');
    let timer = setInterval(()=>{
        console.log(counter++);
        if(counter > 5){
            clearInterval(timer)
            console.log('finalizando la operación');
        }
    }, 1000)
}


contador()


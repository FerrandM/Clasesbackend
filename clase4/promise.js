const task = new Promise ((res, rej) =>{
    //res('tote bene')
    rej('totemali')
})

task
    .then(respuesta => console.log(respuesta))
    .catch( err => console.log(err))

const dividir = (divisor, dividendo) =>{
    return new Promise ((res, rej) => {
        if(divisor === 0){
            rej('indetermined')
        } 
        else{
            res(dividendo/divisor)
        }
    })
}

dividir(1,4) 
    .then(response =>{ 
        return response *3;
    })
    .then(result => console.log(result))
    .catch(err=>console.log(err))


//asincronia 


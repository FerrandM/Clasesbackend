
console.log('algo');
const socket = io()

//socket.emit('mensaje', 'SOY LA DATAAAA')



document.getElementById('socket').innerHTML = `<button id="boton" type="submit"> mensaje </button>`
const boton = document.getElementById('socket')
boton.addEventListener('click', function ola(){
    let div = document.createElement('div');
    div.id = 'content';
    div.innerHTML = '<h3>SE HA ENVIADO UN MENSAJE</h3>';
    document.getElementById('socket').append(div)
    //msj.innerHTML = ('<p>SE ENVIO UN MENSAJE</p>')
    socket.emit('mensaje', 'SOY LA DATAAAA')
})

//Escuchando al server
socket.on('mensajeServer', data =>{
    console.log(data);
} )

socket.on('EVENTO_PARA_TODOS_MENOS_EL_ACTUAL',  data =>{
    console.log(data);
})

socket.on('EVENTO_PARA_TODOS', data =>{
    console.log(data);
})

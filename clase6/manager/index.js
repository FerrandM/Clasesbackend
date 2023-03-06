const ManagerUsuarios = require("./managerU");


const manager = new ManagerUsuarios()

const env = async()=>{
    let first = await manager.consultarUsuarios()
    console.log(first);

    let user = {
        nombre: 'Federick 1',
        apellido:'osandon',
        edad:26,
        curso:'Backend',
        contra: '123'
    }

    let result = await manager.crearUsuarios(user)
    console.log(result);

    let second = await manager.consultarUsuarios()
    console.log(second);
}

env()

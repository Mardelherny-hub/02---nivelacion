/*setTimeout(() => {
    console.log('Hola world');
}, 2000);*/
/*
const saludar = () => {
    console.log('hola world');
}

setTimeout(saludar, 2000);
*/

const getUsusarioById = (id) => {

    const usr = {
        id,
        nombre: 'Victor',
    }

    setTimeout(() => {
        return console.log(usr.nombre);
    }, 1000);
}

getUsusarioById(10); 

//haciendo callback

const getUsusarioById = (id, callback) => {

    const usr = {
        id,
        nombre: 'Victor',
    }

    setTimeout(() => {

        callback(usr);
        
    }, 1000);
}

getUsusarioById(10, (usuario) => {
    console.log(usuario.nombre);
}); 
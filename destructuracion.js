const personaje = {
    //objeto
    nombre: 'Pepe',
    apellido: 'Argento',
    profesion: 'Zapatero',
    getDescripcion(){
        return `${nombre} ${apellido} es ${profesion}`
    }
}

/*const nombre = personaje.nombre;
const apellido = personaje.apellido;
const profesion = personaje.profesion;*/

//destructurar los valores obtenidos en una linea

const {nombre, apellido, profesion} = personaje

console.log(nombre, apellido, profesion);

//destructuracion ene una funcion

const imprimirPersonaje = (personaje) => {
    console.log(nombre, apellido, profesion)
}

imprimirPersonaje(personaje);

//destructurar un array

const personajes = ['Pepe', 'Moni', 'Coqui'];
/*
const p1 = personajes[0];
const p2 = personajes[1];
const p3 = personajes[2];
*/
//desructurando
const [p1, p2, p3] = personajes
console.log(p1, p2, p3)


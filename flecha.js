function sumar(a , b){
    return a + b
}

console.log(sumar(10,20))

//flecha

const sumar =(a , b) => {
    return a + b
}

//cuando la funcion tiene una sola linea se puede hacer:

const sumar = (a , b) => a + b;

console.log(sumar(10,20))

/*ejercicio
function saludo(nombre){
    return `hola ${nombre}`
}*/

const saludo = (nombre) => `hola ${nombre}`

console.log(saludo('Victor'))
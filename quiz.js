let nombre = "Esteban";
let apellido = "Aldana";
let username = "Harrison Boada";
let email = "exmaple@gmail.com";
let mayorEdad = true;
let ahorros = 1000000;
let deudas = 120000;

// 4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
let nombreCompleto = `${nombre} ${apellido}`;
let dinero = ahorros - deudas;

// 5.  Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const quienSoy = (nombres, apellidos, nickname) => {
    var nombreCompleto = `${nombres} ${apellidos}`
    console.log(`Mi nombre es ${nombreCompleto}, pero prefiero que me digas ${nickname}.`)
}

quienSoy("Juan Davidad", "Castro Gallego", "juandc");


// Condicionales else if
let tipoSuscripcion = "Basic";

if (tipoSuscripcion === "Free") {
    console.log("Solo puedes tomas cursos gratis");
}
else if(tipoSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

else if(tipoSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

else if(tipoSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien mas puedes tomar TODOS los cursos de Platzi durante un año");
}

// Condionales sin else if
// const tipoSuscripcion = "Basic";
if (tipoSuscripcion === "Free") {
    console.log("Solo puedes tomas cursos gratis");
}
else {
    if (tipoSuscripcion === "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else {
        if (tipoSuscripcion === "Expert") {
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }
        else {
            if (tipoSuscripcion === "ExpertPlus") {
                console.log("Tú y alguien mas puedes tomar TODOS los cursos de Platzi durante un año");
            }
        }
    }
};

// Ciclos 1
let i = 0;
while ( i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

// Ciclo 2
// let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

// Ciclo 3
let respuesta = 0;

do {
    respuesta = prompt("¿Cuánto es 2 + 2?");
    respuesta *= 1;
} while (!(respuesta === 4))

console.log("La respuesta es correcta");


// Arrays
//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
function arrays(array) {
    return console.log(array[0]);
}

// 3 Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
let autos = ["Ferrari", "Lamborghini", "Renault"];

function array(auto) {
    auto.forEach((elem) => {
        console.log(elem);
    });
};

array(autos);

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
let persona = {
    nombre: 'Julio',
    apellido: 'Fernandez',
    edad: 56
  }
  let personas = (objeto) => {
    Object.values(objeto).forEach((elem) => {
      console.log(elem);
    });
  };
  
  personas(persona);
  
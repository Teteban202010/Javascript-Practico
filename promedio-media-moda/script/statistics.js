// -------------------------------------- Promedio -------------------------------
let listaPromedio = [];

const addArrayPromedio = () => {
  const inputPromedio = document.getElementById("inputPromedioNumero");
  const numberPromedio = parseInt(inputPromedio.value);
  listaPromedio.push(numberPromedio);
  const itemsResult = document.getElementById("listPromedio");
  itemsResult.innerText = "Tu lista actual lleva: (" + listaPromedio + ") si es correcto, presiona el boton Calcular Promedio"
};

const calcularPromedio = () => {
  const sumaLista = listaPromedio.reduce(
    (valorAcumulado = 0, nuevoElemento) =>  valorAcumulado + nuevoElemento
  );
  const promedioLista = parseInt(sumaLista / listaPromedio.length);
  const result = document.getElementById("resultPromedio");
  result.innerText = "El promedio es: " + promedioLista;
}

// --------------------------- Mediana -------------------------------------------
const calcularPromedioMediana = lista => {
  const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = parseInt(sumaLista / lista.length);
    return promedioLista;
}

function calcularMediana() {
    // Se captura los datos del html y se guardan los valores dentro de una variable
      const entradaMediana = document.getElementById("inputMediana");
      const medianaValue = entradaMediana.value;
    // Al ser un String los valores capturados, se procede a convertir el formato a Number 
      let arrayMediana = Array.from(medianaValue.split(","), Number);
    //   Ordenamos los valores de la lista desordenada mediante el metodo sort() de menor a mayor
      const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);
    //   console.log(listaOrdenada);
    // Hallamos la mitad de la cantidad de elemento de mi lista obtenida del HTML y lo redondeamos en caso sea decimal con la funcion parseInt()
      const mitadLista = parseInt(listaOrdenada.length / 2);
    //   console.log(mitadLista);
    
    // Creamos la funcion esPar para verificar si la lista es par o impar
      function esPar(numerito) {
        if (numerito % 2 === 0) {
          return true;
        } else {
          return false;
        }
      }
    
      let mediana;
    // Si la lista es par procedemos hallar la mediana mediante esta forma de lo contrario seguiriamos con el else
      if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
    // Llamamos a la funcion calcularMediaAritmetica() con los elementos1 y elementos2 como parametros y lo guardamos como la variable mediana
        const promedioElemento1y2 = calcularPromedioMediana([elemento1, elemento2]);
        mediana = promedioElemento1y2;
      } else {
        mediana = listaOrdenada[mitadLista];
      }
      //   Enviamos los resultados obtenidos a la pagina html para su visualizacion
      const mostrarResultado = document.getElementById("resultadoMediana");
      mostrarResultado.innerText = "La Mediana es de: " + mediana;
    }

// ------------------------------- Moda ----------------------------------

const calcularModa = () => {
  entradaModa = document.getElementById("inputModa");
  modaValue = entradaModa.value;

  let arrayValor = Array.from(modaValue.split(","), Number);

  const listaContador = {};

  arrayValor.map(function (elemento) {
    if (listaContador[elemento]) {
      // listaContador[elemento] = listaContador[elemento] + 1;
      listaContador[elemento] += 1;
    } else {
      listaContador[elemento] = 1;
    }
  });

  const listaArray = Object.entries(listaContador).sort(
    function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
    }
  );

  const moda = listaArray[listaArray.length - 1];
  
  const mostrarResultado = document.getElementById("resultadoModa");
  mostrarResultado.innerText = "La moda es de: " + parseInt(moda);
}



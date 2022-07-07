

//----------------- Codigo del cuadrado --------------------------
const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado * lado;

const calcularCuadrado = () => {
    const input = document.getElementById("inputCuadrado"); 
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);
    const resultPerimetro = document.getElementById("resultPerimetroCuadrado");
    resultPerimetro.innerText = `El Perimetro del cuadrado es: ${perimetro}`;
    const resultArea = document.getElementById("resultAreaCuadrado");
    resultArea.innerText = `El área del cuadrado es: ${area}`;
}

const limpiarCuadrado = () => {
    document.getElementById("inputCuadrado").value = ""; 
    document.getElementById("resultAreaCuadrado").innerText = "";
    document.getElementById("resultPerimetroCuadrado").innerText = "";
}

// ---------------- Codigo del Círculo ----------------------------
// DIÁMETRO
const diametroCirculo = radio => radio * 2;
//PI
const PI = Math.PI;
// CIRCUFERENCIA
const perimetroCirculo = radio => {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// ÁREA
const areaCirculo = radio => (radio * radio) * PI;

const calcularCirculo = () => {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    const area = areaCirculo(value);
    const resultPerimetro = document.getElementById("resultPerimetroCirculo");
    resultPerimetro.innerText = `El perimetro del circulo es: ${perimetro}`;
    const resultArea= document.getElementById("resultAreaCirculo");
    resultArea.innerText = `El área del circulo es: ${area}`;
}

const limpiarCirculo = () => {
    document.getElementById("inputCirculo").value = ""; 
    document.getElementById("resultPerimetroCirculo").innerText = "";
    document.getElementById("resultAreaCirculo").innerText = "";
}


// -------------- Codigo Triangulo ------------------
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

const calcularTriangulo = () => {
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const inputBase = document.getElementById("inputTrianguloBase");
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const a = parseInt(inputLado1.value);
    const b = parseInt(inputLado2.value);
    const bs = parseInt(inputBase.value);
    const h = parseInt(inputAltura.value);
    const perimetro = perimetroTriangulo(a, b, bs);
    const area = areaTriangulo(bs, h);

    const resultPerimetro = document.getElementById("resultPerimetroTriangulo");
    resultPerimetro.innerText = `El Perimetro del triangulo es: ${perimetro}`;
    const resultArea = document.getElementById("resultAreaTriangulo");
    resultArea.innerText = `El área del triangulo es: ${area}`;
}

const limpiarTriangulo = () => {
    document.getElementById("inputTrianguloLado1").value = ""; 
    document.getElementById("inputTrianguloLado2").value = ""; 
    document.getElementById("inputTrianguloBase").value = ""; 
    document.getElementById("inputTrianguloAltura").value = ""; 
    document.getElementById("resultPerimetroTriangulo").innerText = "";
    document.getElementById("resultAreaTriangulo").innerText = "";
}




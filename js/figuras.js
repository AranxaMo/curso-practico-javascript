//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado){
    return lado**2;
};

console.groupEnd();

//Código del triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base) {
    return (Number(lado1) + Number(lado2) + Number(base));
};

function areaTriangulo(base, altura) {
    return (base * altura)/2;
};
console.groupEnd();

//Altura triangulo isosceles 
function calcularAltura(lado,base) {
    const altura = Math.sqrt((lado**2)-((base**2)/4));
    if (altura === 0) alert("Error, introduce datos válidos");
    return altura;
}

function alturaTriangulo(lado1,lado2,lado3) {
    const alerta = document.getElementById("resultadoAlerta");
    let value = 0;
    switch (true) {
    case lado1 === lado2 && lado1 != lado3:
        value = calcularAltura(lado1,lado3)
    break;
    case lado1 === lado3 && lado1 != lado2:
        value = calcularAltura(lado3,lado2)
    break;
    case lado2 === lado3 && lado2 != lado1:
        value = calcularAltura(lado2,lado1)
    break;
    case lado1 === lado2 && lado2 === lado3:
        alerta.innerText = "Este es un triángulo equilatero";
        value = calcularAltura(lado2,lado1)
    break;
    default: 
        alerta.innerText = "Este no es un triángulo isósceles";
    break;
    }

    return value;
};

//Código del circulo
console.group("Círculo");
const PI = Math.PI;

function diametroCírculo(radio) {
    return radio * 2;
};

function perimetroCirculo(radio) {
    const diametro = diametroCírculo(radio);
    return diametro * PI;
};

function areaCirculo(radio) {
    return PI * (radio**2);
};
console.groupEnd();

//Aquí interactuamos con el HTML
    //CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const resultado = document.getElementById("resultadoPe1");
    resultado.innerText = `El perímetro es: ${perimetro} cm`;
};

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    const resultado = document.getElementById("resultadoA1");
    resultado.innerText = `El perímetro es: ${area} cm^2`;
};

    //TRIANGULO
function calcularPerimetroTriangulo() {
    const inputL1 = document.getElementById("inputTrianguloL1");
    const lado1 = inputL1.value;

    const inputL2 = document.getElementById("inputTrianguloL2");
    const lado2 = inputL2.value;

    const inputB = document.getElementById("inputTrianguloB");
    const base = inputB.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    const resultado = document.getElementById("resultadoPe2");
    resultado.innerText = `El perímetro es: ${perimetro} cm`;
};

function calcularAreaTriangulo() {
    const inputB = document.getElementById("inputTrianguloB");
    const base = inputB.value;

    const inputA = document.getElementById("inputTrianguloA");
    const altura = inputA.value;

    const area = areaTriangulo(base,altura)
    const resultado = document.getElementById("resultadoA2");
    resultado.innerText = `El perímetro es: ${area} cm^2`;
};

    //Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const radio = input.value;

    const perimetro = perimetroCirculo(radio);
    const resultado = document.getElementById("resultadoPe3");
    resultado.innerText = `El perímetro es: ${perimetro} cm`;
};

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const radio = input.value;

    const area = areaCirculo(radio);
    const resultado = document.getElementById("resultadoA3");
    resultado.innerText = `El perímetro es: ${area} cm^2`;
};

//Triangulo 2
function calcularAlturaTriangulo(){
    const inputL1 = document.getElementById("inputTriangulo2L1");
    const lado1 = inputL1.value;

    const inputL2 = document.getElementById("inputTriangulo2L2");
    const lado2 = inputL2.value;

    const inputB = document.getElementById("inputTriangulo2B");
    const lado3 = inputB.value;

    const altura = alturaTriangulo(lado1,lado2,lado3);
    const resultado = document.getElementById("resultadoAltura");
    console.log(altura);
    resultado.innerText = `La altura es: ${altura} cm`;
};

    

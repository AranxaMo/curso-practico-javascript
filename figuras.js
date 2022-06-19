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
    console.log(altura);
}

function alturaTriangulo(lado1,lado2,lado3) {
    if(lado1+lado2 <= lado3 || lado1+lado3 <= lado2 || lado2+lado3 <= lado1){
        console.log("Este triángulo no existe, introduce otros valores");
    }else{
       switch (true) {
        case lado1 === lado2 && lado1 != lado3:
            calcularAltura(lado1,lado3)
        break;
        case lado1 === lado3 && lado1 != lado2:
            calcularAltura(lado3,lado2)
        break;
        case lado2 === lado3 && lado2 != lado1:
            calcularAltura(lado2,lado1)
        break;
        case lado1 === lado2 && lado2 === lado3:
            console.log("Este es un triángulo equilatero")
            calcularAltura(lado2,lado1)
        break;
        default: 
            console.log("Este no es un triángulo isósceles")
        break;
       }
    }
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
    alert(perimetro);
};

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
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
    alert(perimetro);
};

function calcularAreaTriangulo() {
    const inputB = document.getElementById("inputTrianguloB");
    const base = inputB.value;

    const inputA = document.getElementById("inputTrianguloA");
    const altura = inputA.value;

    const area = areaTriangulo(base,altura)
    alert(area);
};

    //Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const radio = input.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
};

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);
};

    

//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado**2;
console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd();

//Código del triángulo
console.group("Triángulo");
const baseTriangulo = 4;
const alturaTriangulo = 5.65;
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y la base mide: ${baseTriangulo}cm`);
console.log(`La altura del triángulo es de: ${alturaTriangulo}`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del cuadrado es: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}cm^2`);
console.groupEnd();

//Código del circulo
console.group("Círculo");
const radio = 4;
const diametro = radio * 2;
const PI = Math.PI;

console.log(`El radio del círculo es: ${radio}cm y el diámetro mide: ${diametro}cm`);

const perimetroCirculo = diametro * PI;
console.log(`El perímetro del círculo es: ${perimetroCirculo}cm`);

const areaCirculo = PI * (radio**2);
console.log(`El área del círculo es: ${areaCirculo}cm^2`);
console.groupEnd();
function crearLista(){
    const inputLista = document.getElementById("inputLista");
    const listaValue = inputLista.value;

    let nuevoArray = listaValue.split(",");
    return nuevoArray;
};

//MODA
function calcularModa() {
    let lista = crearLista();
    const lista1Count = {};

    lista.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] = lista1Count[elemento] + 1;
            }else {
                lista1Count[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function(a,b){
            return a[1] - b[1];
        }
    );
    const moda = lista1Array[lista1Array.length - 1];
    return moda; 
};

//PROMEDIO
function calcularPromedio() {
    let lista = crearLista();
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return Number(valorAcumulado) + Number(nuevoElemento);
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
};

//MEDIANA
function calcularMediana() {
    let lista = crearLista();

    const ordenarNumeros = lista.sort(function(a,b){
        return a - b;
    });
    
    const mitadLista = parseInt(lista.length / 2);
    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        }else{
            return false;
        }
    };

    let mediana;
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
    
        const promedio = calcularPromedio([elemento1,elemento2]);
    
        mediana = promedio;
    }else{
        mediana = lista[mitadLista];
    }
    return mediana;
};

/*HTML*/
function onClickCalcularModa(){
    let moda = calcularModa();
    let elemento = moda[0];
    let veces = moda[1];
    console.log(moda);
    const resultado = document.getElementById("resultado1");    
    const resultado2 = document.getElementById("resultado1Veces");

    if(elemento == 0){
        resultado.innerText = `Favor de introducir valores`;
        resultado2.innerText = `!!`;
    }else{
        resultado.innerText = `La moda es: ${elemento}`;
        resultado2.innerText = `Se repite ${veces} veces`;
    }
}

function onClickCalcularPromedio(){
    let value = calcularPromedio();
    const resultado = document.getElementById("resultado2");    
    const resultado2 = document.getElementById("resultado2Veces");

    resultado.innerText = `El promedio/media aritmetica es:`;
    resultado2.innerText = `${value}`;
}

function onClickCalcularMediana(){
    let value = calcularMediana();
    const resultado = document.getElementById("resultado3");    
    const resultado2 = document.getElementById("resultado3Veces");
    resultado.innerText = `La mediana es:`;
    resultado2.innerText = `${value}`;
    console.log(value);
}



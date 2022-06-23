//Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

//Calculadora de mediana
function calcularMedianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        
        const mediana = calcularPromedio([personaMitad1,personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const salariosMex = mexico.map(
    function(personita){
        return personita.salary;
    }
);

const salariosMexSorted = salariosMex.sort(
    function (a,b) {
        return a-b;
    }
);

const medianaGeneralMex = calcularMedianaSalarios(salariosMexSorted);

//Mediana del top 10%
const spliceStart = parseInt((salariosMexSorted.length * 90) / 100) ;
const salariosTop10 = salariosMexSorted.slice(spliceStart,salariosMexSorted.length);

const medianaTop10 = calcularMedianaSalarios(salariosTop10);



console.log({
    medianaGeneralMex,
    medianaTop10,
});
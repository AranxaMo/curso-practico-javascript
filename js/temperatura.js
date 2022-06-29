function convertCelsius(cantidad,temperatura){
    let resultado;
    let operacion = 0;
    switch (temperatura){
        case "C":
            resultado = "Ya esta en Celsius";
        break;
        case "F":
            operacion = (cantidad * (9/5)) + 32;
            resultado = `${operacion}°F`
        break;
        case "K":
            operacion = cantidad + 273.15;
            resultado = `${operacion}°K`
        break;
    }
    return resultado;
}
function convertFahrenheit(cantidad,temperatura){
    let resultado;
    let operacion = 0;
    switch (temperatura){
        case "C":
            operacion = (cantidad - 32) * (5/9);
            resultado = `${operacion}°C`
        break;
        case "F":
            resultado = "Ya esta en Fahrenheit";
        break;
        case "K":
            operacion = (cantidad - 32) * (5/9) + 273.15;
            resultado = `${operacion}°K`
        break;
    }
    return resultado;
}
function convertKelvin(cantidad,temperatura){
    let resultado;
    let operacion = 0;
    switch (temperatura){
        case "C":
            operacion = cantidad - 273.15;
            resultado = `${operacion}°C`
        break;
        case "F":
            operacion = (cantidad - 273.15) * (9/5) + 32;
            resultado = `${operacion}°F`
        break;
        case "K":
            resultado = "Ya esta en Kelvin";
        break;
    }
    return resultado;
}

/*HTML*/


function obtenerTemp(){
    const select1 = document.getElementById("temperaturaS");
    const fromTemp = select1.value;

    const select2 = document.getElementById("temperaturaC");
    const toTemp = select2.value;

    const input = document.getElementById("inputTemp");
    const value = Number(input.value);

    const resultado = document.getElementById("resultado");
    resultado.classList.add("resultado");

    if(fromTemp === "C"){
        resultado.innerText = convertCelsius(value,toTemp);
    }else if(fromTemp === "K"){
        resultado.innerText = convertKelvin(value,toTemp);
    }else if (fromTemp === "F"){
        resultado.innerText = convertFahrenheit(value,toTemp);
    }
}

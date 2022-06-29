function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickPrecioConDescuento() {
    const precioInput = document.getElementById("inputPrice");
    const precioValue = precioInput.value;

    const descuentoInput = document.getElementById("inputDescuento");
    const descuentoValue = descuentoInput.value;

    const precioConDescuento = calcularPrecioConDescuento(precioValue,descuentoValue);
    const resultado = document.getElementById("resultadoPrecio");
    resultado.innerText = `El precio con descuento es $${precioConDescuento}`
};

//Cupón
const listaCupones = {
    CODE10: 10,
    CODE15: 15,
    CODE20: 20,
    CODE30: 30,
    CODE50: 50,
};

function descuentoDelCupon() {
    const cupon = document.getElementById("inputCupon");
    const nombreCupon = cupon.value;
    
    const cuponDefault = 0;
    const cuponDescuento = listaCupones[nombreCupon] || cuponDefault;
    return cuponDescuento;
};

function aplicarCupon(){
    const inputPriceProduct = document.getElementById("inputPriceProduct");
    const priceProduct = inputPriceProduct.value;

    const cupon = descuentoDelCupon()
    const precioFinal = calcularPrecioConDescuento(priceProduct,cupon);
    const resultadoPrice = document.getElementById("resultadoPrecioProduct");
    if (cupon === 0){
        resultadoPrice.innerText = `Cupón no válido.`
        alert("El cupón no es válido")
    }else{
        resultadoPrice.innerText = `Se aplico un ${cupon}% de descuento. El precio final es: $${precioFinal}`
    }  
};



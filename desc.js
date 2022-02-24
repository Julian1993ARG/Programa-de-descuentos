let precioOriginal = document.getElementById("precioOriginal");
let descuento = document.getElementById("descuento");
let ahorro = document.getElementById("ahorro");
let precioFinal = document.getElementById("precioFinal");

function calcularDescuento(){
    let total = precioOriginal.value * (100 - descuento.value)/100;
    let desc =  precioOriginal.value - total;
    console.log(total)
    ahorro.innerHTML = "$" + desc + " Usted se ahorra"
    precioFinal.innerHTML = "$" + total + " A pagar"
}
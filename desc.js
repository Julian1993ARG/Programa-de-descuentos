
let precioOriginal = document.getElementById("precioOriginal");
let descuentoUser = document.getElementById("descuento");
let ahorro = document.getElementById("ahorro");
let precioFinal = document.getElementById("precioFinal");
let cupon = document.getElementById("cupon");
let cupoDisponibles = ["macho","machote","grande","mini"];

function descuento (po,desc){
    return po * (100-desc)/100
}

function calcularDescuento(){
    let total = descuento(precioOriginal.value, descuentoUser.value);
    
    if(cupon.value != ""){
        if (!cupoDisponibles.includes(cupon.value)){
            alert("Cupo erroneo") 
        }
        else if (cupon.value == "macho"){
            total = descuento(total,40)
        }
        else if (cupon.value == "machote"){
            total = descuento(total,45)
        }
        else if (cupon.value == "grande"){
            total = descuento(total,30)
        }
        else if (cupon.value == "mini"){
            total = descuento(total,5)
        }
    }
    let desc =  precioOriginal.value - total;
    ahorro.innerHTML = "$" + desc + " Usted se ahorra"
    precioFinal.innerHTML = "$" + total + " A pagar"
}


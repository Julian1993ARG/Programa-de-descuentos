let datos =[15, 35, 65, 356, 96,12];
let datosOrdenados = ordenarDatos(datos)

function ordenarDatos(dato){
    var ordenados = dato.sort(function(a,b){
        a-b
    })
    return ordenados


}

function media(dato){
    
    /* for(let i = 0; i< datos.length;i++){
        total = total + datos[i];   
    }
    total = total / dato.length; */
    let total = dato.reduce(function(valorAnterior,valorActual){
        return valorAnterior + valorActual;
    });
    total /=dato.length;
    return total;
}

function moda(dato){

    let mitadLista = parseInt(dato.length/2);
    if (dato.length % 2 == 0){
        console.log("la moda es " + (dato[mitadLista - 1] + dato[mitadLista])/2)
    }else{
        console.log("La moda es " + dato[mitadLista])
    }

}


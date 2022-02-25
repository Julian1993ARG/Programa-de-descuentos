let datos =[15, 35, 65, 582, 356, 96,12];

function media(dato){
    let total = 0;
    for(let i = 0; i< datos.length;i++){
        total = total + datos[i];   
    }
    total = total / dato.length;
    return total;
}


let datos =[15,35,65,356,96,12,32,85,648,35,458,945,75,8153,45,874,1,63486,1,861,5,,5841];
let datosOrdenados = datos.sort(function(a,b){return a - b})


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

let notaMate = document.getElementById("matematica");
let notaProgra = document.getElementById("programacion");
let notaIngles = document.getElementById("Ingles");
let resultado = document.getElementById("resultado");


document.addEventListener("click",calcular);

function calcular (){

    let notasValor = [
        {
            materia:"Matematica",
            nota:9,
            valor: 4
        },
        {
            materia:"Programacion",
            nota:8,
            valor: 7
        },
        {
            materia:"Ingles",
            nota:6,
            valor: 6
        }
    ]
    
    let multiNotaValor = notasValor.map(function(objeto){
        return objeto.nota * objeto.valor
    })
    let suma1 = multiNotaValor.reduce(function(a,b){return a+b});
    let sumaValores =notasValor.valor.reduce(function(a,b){return a+b});
    console.log(sumaValores)
    

}
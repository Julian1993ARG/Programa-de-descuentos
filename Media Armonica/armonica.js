let object = [
    {
        kilometros:100,
        velocidad:100,
    },
    {
        kilometros:100,
        velocidad:20,
    },
    {
        kilometros:100,
        velocidad:100,
    },
    {
        kilometros:100,
        velocidad:130,
    }
]


let cantidadDatos = 4;
let divVelocidades = object.map(function(vel){
    return 1/vel.velocidad}).reduce(function(a,b){return a+b})

let total = cantidadDatos/divVelocidades
console.log(divVelocidades)


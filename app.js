//Aprendiendo JavaScript

const hora = 20
// 0:00 - 5:00
// 6:00 - 11:00
// 12:00 5:00

if( hora >= 0 && hora <= 5 ){
    console.log('Estoy Durmiendo')   
}
else if( hora >= 6 && hora <= 11 ){
    console.log('Buenos Dias')        
}
else if( hora >= 12 && hora <= 17){
    console.log('Buenas tardes')
}
else{
    console.log('Buenas Noches')
}

//Operador ternario
// ? ==> Indica la parte Verdadera de la condición 
// : ==> Indica la Parte Falsa de la condición

let firstCheck = false
let secondCheck = false 

const access =  firstCheck ? 'Acceso Denegado' : secondCheck ? 'Acceso Denegado' : 'Acceso Permitido si los dos check son falsos'
console.log(access)
// switch

// Domingo == 0, Lunes == 1, Martes == 2, Miercoles == 3, Jueves == 4, Viernes == 5, Sabado == 6

const key = Math.round( Math.random() * 10 )

console.log(key)

switch (key) {
    case 3:
        console.log('Estas en los primer 3 numeros')
        break;
    case 6:
        console.log('Estas en un numero de 4 a 6 ')
        break; 
    case 10:
        console.log('Estas en un numero de 7 a 10')
        break;
    default :
        console.log('No entro en ninguna Condición')
    break; 
}

//Ciclos en javaScript
let contador = 0

while( contador <= 10){
    console.log( contador )
    contador++
}

contador = 0

do{
    console.log('Uso de do - while')
    contador++
}while( contador < 10 )

//Recorrer un array con bucle for 
// const elementos = ['Angel','Lopez',{
//     email:['lariosangel062@gmail.com','delgadoangel062@gmail.com'],
//     contacto: [ 88455634,82397537 ]
//     }
// ]
// for (let i = 0; i < elementos.length; i++) {
//     const salida = elementos[i];
//     console.log(salida)
// }

// Creamos un Objeto

const data = {   
    name: 'Angel Abraham',
    surname: 'Lopez Delgado',
    contact:{
        email:['lariosangel062@gmail.com','delgadoangel062@gmail.com'],
        number:[ 3429623333,2230380323 ],
        social:{
            faceboook: 'LucasDelgado',
            instagram: '@angelDelgado'
        }
    },
    age: 20,
    sons: false
}
 
//Utilizamos for in para recorrer un objeto en javaScript}


for (const key in data) {
    const element = data[key]
    console.log(`${key}: ${element}`)
}

console.log(data.contact.email[0])
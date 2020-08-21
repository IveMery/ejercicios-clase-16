// esParOImpar(numero)
// Crear una función esParOImpar que acepte como argumento un numero
//  y devuelva el string par si el numero es par, o el string impar
//   si el numero es impar

// Tip: Investigá sobre el operador módulo %



 const esParOImpar = (numero) =>{
     if( numero % 2 == 0){
         return `Es par`
     }
     else{
         return `Es impar`
     }
 }

 console.log(esParOImpar(3))  // 'impar'
 console.log(esParOImpar(10)) // 'par'

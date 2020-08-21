// Crear una función esPositivoONegativo que 
// acepte como argumento un numero y devuelva el
//  string positivo si el numero es positivo,
//  o el string negativo si el numero es negativo





 const esPositivoONegativo = (numero) => {
     if (numero >= 1 ) {
         return `positivo`
     }

     else if (numero == 0) {
         return `el numero es 0`
     }
    

     else {
         return `Negativo`
     }

 }
console.log(esPositivoONegativo(3))  // 'positivo'
console.log(esPositivoONegativo(-5)) // 'negativo'
console.log(esPositivoONegativo(999))
 console.log(esPositivoONegativo(1002))
 console.log(esPositivoONegativo(0))

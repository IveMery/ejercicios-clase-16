// obtenerNota(puntaje)
// Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje, con las siguientes reglas:

// Puntaje	Nota
// Menor a 6	Desaprobado
// Mayor o igual a 6 y menor a 7	Regular
// Mayor o igual a 7 y menor a 8	Bueno
// Mayor o igual a entre 8 y menor a 10	Muy bueno
// 10	Excelente
// Menor a 0 o mayor a 10	Puntaje inválido

 
 const obtenerNota = (puntaje) =>{
     if (puntaje <6){
         return `Desaprobado`
     }
     else if (puntaje >=6 && puntaje <7){
         return `Regular`
     }
     else if (puntaje>=7 && puntaje<8){
         return `Bueno`
     }
     else if (puntaje >=8 && puntaje<10){
         return `Muy Bueno`
     }
     else if( puntaje ==10){
         return `Excelente`
     }

     else{
         return `Puntaje invalido`
     }
 }

 console.log(obtenerNota(7))    // "Bueno"
 console.log(obtenerNota(9.6))  // "muy bueno"
 console.log(obtenerNota(12))   // "Puntaje inválido"

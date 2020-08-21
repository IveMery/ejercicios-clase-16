// avanzarSemaforo(colorActual)
// Crear una función avanzarSemaforo que acepte como argumento 
//  un string colorActual y devuelva un string con el siguiente color del
//   semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

 let = avanzarSemaforo = (colorActual) =>{
    if (colorActual ==  `verde`){
         return `amarillo`
     }else if (colorActual == `amarillo`) {
         return ` rojo`
     }else {
         return `verde`
     }
 }

 console.log(avanzarSemaforo('verde'))     // 'amarillo'
 console.log(avanzarSemaforo('amarillo'))  // 'rojo'
 console.log(avanzarSemaforo('rojo'))//verde

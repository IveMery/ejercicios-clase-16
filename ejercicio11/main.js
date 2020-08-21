// obtenerSensacion(temperatura)
// Crear una función obtenerSensacion que 
//tome como argumento un número temperatura y
 //devuelva un string dependiendo de la temperatura,
  //con las siguientes reglas:

 //Temperatura	Mensaje
 //Menor a 0°	¡Está helando!
// Mayor o igual a 0° y menor a 15°	¡Hace frío!
// Mayor o igual a 15° y menor a 25°	Está lindo
// Mayor o igual a entre 25° y menor a 30°	Hace calor
// Mayor o igual de 30°   ¡Hace mucho calor!




 const obtenerSensacion = (temperatura) =>{
     if (temperatura < 0){
         return `Esta Helado!`
     }

     else if (temperatura>=0 && temperatura < 15){
         return `Hace Frio!`

     }
     else if (temperatura >=15 && temperatura<25){
         return `Esta lindo!`
     }
     else if (temperatura >=25 && temperatura <30){
        return `Hace calor!`
     }
   
     else{
        return `Hace mucho calor`
     }
 }

 console.log(obtenerSensacion(33)) // "¡Hace mucho calor!"
 console.log(obtenerSensacion(-1))
 console.log(obtenerSensacion(0))
 console.log(obtenerSensacion(14))
console.log(obtenerSensacion(22))

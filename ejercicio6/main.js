// puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
// Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, 
// tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar
// su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, 
// //no tiene multas impagas y pagó todos los impuestos




 const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
     if  (pasoTests == true && tieneMultasImpagas ==false && pagoImpuestos == true){ // si es true no le deberia poner el == true ya que lo toma solo como valor verdadero
         return  true
     }
     else {
         return false

     }
 }

 console.log(puedeRenovarCarnet(true, true, true))    // false
 console.log(puedeRenovarCarnet(true, true, false))   // false
 console.log(puedeRenovarCarnet(true, false, true))   // true
 console.log(puedeRenovarCarnet(true, false, false))  // false
 console.log(puedeRenovarCarnet(false, true, true))   // false
 console.log(puedeRenovarCarnet(false, true, false))  // false
 console.log(puedeRenovarCarnet(false, false, true))  // false
 console.log(puedeRenovarCarnet(false, false, false)) // false

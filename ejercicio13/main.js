// Crear una función jugarPiedraPapelTijera 
// que tome como argumentos dos strings a y b 
// que representen una jugada (piedra, papel, tijera) 
// y dependiendo el devuelva un string con un mensaje
//  avisando qué jugada ganó (o si hubo empate)



const   jugarPiedraPapelTijera = (a, b) =>{
    if ( a==`tijera` && b==`piedra` || a==`piedra` &&  b==`tijera`){
    return ` Gano Piedra!!!!`
}
    else if ( a==`papel` && b==`piedra`  || a==`piedra` && b==`papel`) {
    return `Gano Papel!!!`
}
    else if( a==`papel` && b==`tijera` || a==`tijera` && b==`papel`){
        return `Gano tijera!!!!`
    }
    else if (a==b){
        return `Empate!`
    }

    else {
        return `Ingresa una opcion valida`
    }
}


console.log(jugarPiedraPapelTijera('tijera', 'piedra'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('piedra', 'tijera'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('papel', 'piedra'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('piedra', 'papel'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('papel', 'tijera'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('tijera', 'papel'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  // ¡Empate!
console.log(jugarPiedraPapelTijera('papel', 'papel'))    // ¡Empate!
console.log(jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!
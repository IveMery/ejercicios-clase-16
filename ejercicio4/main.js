// esVocal(letra)
// Crear una función esVocal que tome como argumento un string letra y 
// devuelva true si letra es una vocal o false si no lo es.


 const esVocal = (letra) =>{
     if (letra == `a`|| letra == `e` ||  letra == `i` || letra==  `o` || letra== `u`){
         return true
     }
     else {
         return false
     }

 }


 console.log(esVocal('a')) // true
 console.log(esVocal('n')) // false
 console.log(esVocal('e')) // true

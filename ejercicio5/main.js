// esConsonante(letra)
// Crear una función esConsonante que tome como argumento un string letra y 
// devuelva true si letra es una consonante o false si no lo es




 const esConsonante = (letra) => {
     if ( letra == `a` || letra == `e` || letra == `i` || letra == `o` || letra == `u`){
         return false
     }
     else{

      return true
     }
 }

 console.log(esConsonante('a')) // false
 console.log(esConsonante('n')) // true
 console.log(esConsonante('e')) // false

function imprimir  ( c ) {
    console.log(c)
}

//callback: fucncion a ejecutar dentro de sumar
function sumar (a ,b , callback){
    let suma = a + b
    callback(suma)
}

let resultado=0;

//ejecutar: llamar a su madre
sumar( 7 , 8 , imprimir(resultado) )
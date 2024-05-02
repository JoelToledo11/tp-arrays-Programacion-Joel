function convertirMayusculas(cadena) {
    let cadenaConvertida = cadena.toLowerCase().split(' ').map(function(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }).join(' ');
    return cadenaConvertida;
}

console.log(convertirMayusculas('semaforo verde')); 

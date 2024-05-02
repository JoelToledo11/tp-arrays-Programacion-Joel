function ordenAlfabetico(cadena) {
    var cadenaOrdenada = cadena.split('').sort().join('');
    return cadenaOrdenada;
}

console.log(ordenAlfabetico('pajaro')); 

function buscarPalabra(frase) {
    let palabras = frase.split(' ');
    let palabraLarga = '';

    palabras.forEach(function(palabra) {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    });

    return palabraLarga;
}

console.log(buscarPalabra('mil cuatrocientos')); 
function NumeMasAlto(miArray) {
    let numeroMasAlto = miArray[0];
    miArray.find(function(numero) {
        if (numero > numeroMasAlto) {
            numeroMasAlto = numero;
        }
    });
    console.log(numeroMasAlto);
}

NumeMasAlto([5, 2, 9, 1, 7]);

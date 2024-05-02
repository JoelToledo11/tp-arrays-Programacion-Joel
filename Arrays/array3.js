function NumeroMasBajo(miArray) {
    let numeroMasBajo = miArray[0];
    miArray.find(function(numero) {
        if (numero < numeroMasBajo) {
            numeroMasBajo = numero;
        }
    });
    console.log(numeroMasBajo);
}

NumeroMasBajo([5, 2, 9, 1, 7]);


function mostrarValoresRepetidos(array) {
    let valoresRepetidos = [];
    array.sort();

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] == array[i]) {
            valoresRepetidos.push(array[i]);
        }
    }

    console.log(valoresRepetidos.join(','));
}


mostrarValoresRepetidos([1, 2, 2, 3, 4, 4, 5]); 

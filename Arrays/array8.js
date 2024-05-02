function invertir(numero) {
    let numeroInvertido = Number(String(numero).split('').reverse().join(''));
    return numeroInvertido;
}

console.log(invertir(13)); 

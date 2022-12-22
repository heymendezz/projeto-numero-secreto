function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(Number.isNaN(numero)){
        console.log(`Valor Invalido - Apenas numeros entre entre ${menorValor} e ${maiorValor}`)
    }
 
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        console.log(`Valor invalido - O Numero precisa estar entre ${menorValor} e ${maiorValor}`)
    }



}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}
function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)) {

        elementoChute.innerHTML += '<div>Valor inválido</div>'  
        
    }
 
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor invalido - O Numero precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3> O número secreto era ${numero}</h3>
        `
    }



}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

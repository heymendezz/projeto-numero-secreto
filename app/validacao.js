function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)) {

        elementoChute.innerHTML += '<div>Valor inválido</div>'  

        return
        
    }
 
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor invalido - O Numero precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3> O número secreto era ${numero}</h3>
        <button id="reiniciar-jogo" class="botao-jogar">Jogar novamente</button>
        `
    }

    else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }

    else {
        elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }



}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', e => {
    if (e.target.id == 'reiniciar-jogo'){
        window.location.reload()
    }
    
})
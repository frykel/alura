
const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

const menorValorTexto = document.querySelector("#menor-valor")
const maiorValorTexto = document.querySelector("#maior-valor")

menorValorTexto.innerHTML = menorValor
maiorValorTexto.innerHTML = maiorValor

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*maiorValor+1)
}
console.log(numeroSecreto)
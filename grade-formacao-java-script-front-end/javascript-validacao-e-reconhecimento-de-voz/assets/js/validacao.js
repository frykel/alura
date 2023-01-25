function verificaSeOChuteEValido(chute){
    const resposta = document.querySelector("#dica")
    const numero = +chute //converte chute em numero inteiro acrescentando o + na frente do chute

    if(chuteForInvalido(numero)){ //verifica se o numero passado não é número (isNaN)
        if(chute.toUpperCase()==="GAME OVER"){
            document.body.innerHTML=`
        <h1>GAME OVER!</h1>
        <h3>Se quiser jogar de novo, clique no botão!
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button> `
        }
        else{
        resposta.innerHTML="Valor Invalido, por favor diga um número"
        resposta.style.display="block"
        }
    }
    if(numeroForMaiorOuMenorQueOPermitido(numero)){
        resposta.innerHTML=`Você precisa dizer um número entre ${menorValor} e ${maiorValor}`
        resposta.style.display="block"
    }
    if(numero===numeroSecreto){
        document.body.innerHTML=`
        <h1>Você acertou!</h1>
        <h3>O número secreto era ${numeroSecreto} !
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button> `
        
    }
    else if(numero<numeroSecreto){
        resposta.innerHTML=`O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i>`
        resposta.style.display="block"
    }
    else if(numero>numeroSecreto){
        resposta.innerHTML=`O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i>`
        resposta.style.display="block"  

    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}
function numeroForMaiorOuMenorQueOPermitido(number){
    return number > maiorValor || number < menorValor 
    // vai retornar true se number> maiorValor ou number menor que menorValor
}

document.body.addEventListener('click',(evento)=>{
    if(evento.target.id=="jogar-novamente"){
        window.location.reload();
    }
})
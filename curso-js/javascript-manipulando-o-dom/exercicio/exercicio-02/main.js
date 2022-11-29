
const seletores = document.querySelectorAll("[data-operacao");

seletores.forEach((elemento)=>{

    elemento.addEventListener("click",(evento)=>{

        checaOperacao(evento.target.dataset.operacao,evento.target.parentNode)
    })

})

function checaOperacao(operacao,operador){
    let contador = operador.querySelector('[data-nome]')

    if(operacao=== "+"){
        contador = parseInt(contador.value) + 1;
    }
    else{
        contador = parseInt(contador.value) - 1;
    }
    return contador.value
}
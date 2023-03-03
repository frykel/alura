

const button = document.querySelectorAll("[data-botao]")
const resposta = document.querySelectorAll("[data-resposta]")



button.forEach((elemento) => {

    elemento.addEventListener("click",(evento)=>{
        console.log(evento.target.dataset.botao)
        abreCaixa(evento.target.dataset.botao)
    })
})

function abreCaixa(botao){
    if(resposta[botao].style.display=="none"){
    resposta[botao].style.display="block"
    }else{
        resposta[botao].style.display="none"
    }

}
    
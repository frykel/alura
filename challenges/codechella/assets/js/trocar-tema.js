
const botao = document.querySelector("[data-tema]")
const cabecalho = document.querySelector(".cabecalho")
const bannerPrincipal = document.querySelector("#banner__principal")
const corpo = document.querySelector(".corpo")
console.log(botao)
let cont = 0
botao.addEventListener("click",(evento)=>{
    
    if(cont==0){
        trocarBotaoBoreal()        
        cabecalho.classList.add('cabecalho__container__boreal')
        

        bannerPrincipal.classList.add('banner__boreal','banner__texto__boreal')

        corpo.classList.add('corpo__boreal')
        
        
    
    cont++
  
    }else{
        trocarBotaoVerao()
       
        cabecalho.classList.remove('cabecalho__container__boreal')

        bannerPrincipal.classList.remove('banner__boreal','banner__texto__boreal')
        corpo.classList.remove('corpo__boreal')
    cont=0
    }

})

function trocarBotaoBoreal(){
    botao.style.backgroundImage="linear-gradient(to bottom, var(--primay-bg-color),var(--secondary-bg-color),var(--terciary-bg-color))"
    botao.style.color="black"
}
function trocarBotaoVerao(){
    botao.style.backgroundImage="linear-gradient(to bottom, var(--primay-bg-color-2),var(--secondary-bg-color-2),var(--terciary-bg-color-2))"
    botao.style.color="white"
}

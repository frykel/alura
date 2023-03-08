
const botao = document.querySelector("[data-tema]")
const cabecalho = document.querySelector("#cabecalho")
console.log(botao)
let cont = 0
botao.addEventListener("click",(evento)=>{
    
    if(cont==0){
        trocarBotaoBoreal()        
        cabecalho.classList.add('cabecalho__container__boreal')
        cabecalho.classList.remove('cabecalho__container')
        
    
    cont++
  
    }else{
        trocarBotaoVerao()
        cabecalho.classList.add('cabecalho__container')
        cabecalho.classList.remove('cabecalho__container__boreal')
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
function trocarCabecalhoBoreal(){

}
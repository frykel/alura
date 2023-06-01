const caixaPergunta = document.querySelectorAll(".pergunta__duvida")
const caixaResposta = document.querySelectorAll(".pergunta__resposta")




let cont = 0
botao.addEventListener("click",(elemento)=>{
    if(cont==0){
    caixaPergunta.forEach((evento)=>{
        
        evento.classList.add("pergunta__duvida__boreal")
        
    })
    caixaResposta.forEach((evento)=>{       
        
        evento.style.color="black"
    })
    cont++
}else{
    caixaPergunta.forEach((evento)=>{

        evento.classList.remove("pergunta__duvida__boreal")
       
    })
    caixaResposta.forEach((evento)=>{       
        
        evento.style.color="black"
    })
    cont=0

}

})

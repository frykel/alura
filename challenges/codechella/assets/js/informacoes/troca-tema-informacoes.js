const caixaPergunta = document.querySelectorAll(".pergunta__duvida")


let cont = 0
botao.addEventListener("click",(elemento)=>{
    if(cont==0){
    caixaPergunta.forEach((evento)=>{
    
        evento.classList.add("pergunta__duvida__boreal")
    })
    cont++
}else{
    caixaPergunta.forEach((evento)=>{

        evento.classList.remove("pergunta__duvida__boreal")
    })
    cont=0

}

})

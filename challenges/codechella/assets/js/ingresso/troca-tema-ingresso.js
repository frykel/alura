const submitBotao = document.querySelector(".botao__compra__ingresso")

let cont = 0
botao.addEventListener("click",(elemento)=>{
    if(cont==0){
    submitBotao.forEach((evento)=>{
    
        evento.classList.add("pergunta__duvida__boreal")
    })
    cont++
}else{
    submitBotao.forEach((evento)=>{

        evento.classList.remove("pergunta__duvida__boreal")
    })
    cont=0

}

})
const submitBotao = document.querySelector(".botao__compra__ingresso")
console.log(submitBotao)
let cont = 0
botao.addEventListener("click",(elemento)=>{
    if(cont==0){
    
    
        submitBotao.classList.add("botao__compra__ingresso__boreal")
    
    cont++
}else{
   

        submitBotao.classList.remove("botao__compra__ingresso__boreal")

    cont=0

}

})
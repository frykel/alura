
const botao = document.querySelector('.botao');
const p = document.querySelector('.principal');
const text = document.querySelector('.texto')
let cont = 0
botao.addEventListener("mouseover",()=>{
    cont += 1;
    if(cont<20){
    botao.style.position="absolute";

    mudaPosição()
    }
    else{
        alert("VOCÊ PERDEU!")
        document.location.reload(); //recarrega a página
    }
})
botao.addEventListener("click",()=>{
    alert("Você conseguiu!")})

function mudaPosição(){
    //const x = Math.floor(Math.random() * 101) -100 //gera números aleatórios entre -100 e 100
    const x = Math.floor(Math.random() * 90)
    const y = Math.floor(Math.random() * 90)
    
    botao.style.top=y+"%"
    botao.style.left=x+"%"
    if(cont>8 && cont<14){
        text.innerHTML="Parece que você não está indo muito bem"
        text.style.color="yellow";
    }
    else if(cont>=14){
        text.innerHTML="Isto está ficando feio, melhor desistir!"
        text.style.color="red";
       
}
}

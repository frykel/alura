
const bloco = document.querySelectorAll('[data-caixa]');

bloco.forEach((evento)=>{

    evento.addEventListener("click",(elemento)=>{
        trocaImagem(elemento.target.dataset.caixa)
        console.log(elemento)
    })
})

function trocaImagem(elemento){
    
    if(elemento==0){
        
    }
}
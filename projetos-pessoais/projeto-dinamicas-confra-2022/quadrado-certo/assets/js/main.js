
const bloco = document.querySelectorAll('[data-caixa]');
const botao = document.querySelector('.botao');
const premio = ["Barra de Chocolate","Trava-língua: O rato roeu a roupa do Rei de Roma (3 vezes)","Dia de Folga","Pote de Nutella","Voucher de R$ 50,00","Ligue para sua mãe e diga que quer uma boneca de aniversário","Barra de Chocolate","Ligue para a última pessoa que mandou mensagem no WhatsApp e diga que está apaixonado(a) por ela","Caixa de BIS"]
function embaralha(arr){
    for(var i=0;i<bloco.length;i++){
        bloco[i].style.fontSize="3rem"
        bloco[i].style.textAlign="center"
        bloco[i].innerHTML = i+1
    }
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
    console.log(arr[0])
}

botao.addEventListener("click",()=>{
   embaralha(premio)
   
})

bloco.forEach((evento)=>{

    evento.addEventListener("click",(elemento)=>{
        trocaImagem(elemento.target.dataset.caixa)
        
    })
})

function trocaImagem(elemento){
    for(var i=0;i<bloco.length;i++){
        bloco[i].style.fontSize="2rem"
        bloco[i].style.textAlign="center"
    }
    for(var i=0;i<bloco.length;i++){

        bloco[elemento-1].innerHTML = premio[elemento-1]
    }
    
   /* if(elemento==="1"){
        
        bloco[0].innerHTML ="Barra de Chocolate"        
    }
    else if(elemento==="2"){
        
        bloco[1].innerHTML ="Trava-língua: O rato roeu a roupa do Rei de Roma (3 vezes)"        
    }
    else if(elemento==="3"){
       
        bloco[2].innerHTML ="Dia de Folga"        
    }
    else if(elemento==="4"){
       
        bloco[3].innerHTML ="Pote de Nutella"        
    }
    else if(elemento==="5"){
      
        bloco[4].innerHTML ="Voucher de R$ 50,00"        
    }
    else if(elemento==="6"){
      
        bloco[5].innerHTML ="Ligue para sua mãe e diga que quer uma boneca de aniversário"        
    }
    else if(elemento==="7"){
      
        bloco[6].innerHTML ="Barra de Chocolate"        
    }
    else if(elemento==="8"){
      
        bloco[7].innerHTML ="Ligue para a última pessoa que mandou mensagem no WhatsApp e diga que está apaixonado(a) por ela"        
    }
    else if(elemento==="9"){
      
        bloco[8].innerHTML ="5 Serenata"        
    }
    */
}
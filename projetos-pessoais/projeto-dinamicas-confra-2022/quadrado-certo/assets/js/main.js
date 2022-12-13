
const bloco = document.querySelectorAll('[data-caixa]');

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
    
    if(elemento==="1"){
        
        bloco[0].innerHTML ="Barra de Chocolate"        
    }
    else if(elemento==="2"){
        
        bloco[1].innerHTML ="Trava-língua: O rato roeu a roupa do Rei de Roma"        
    }
    else if(elemento==="3"){
       
        bloco[2].innerHTML ="Dia de Folga"        
    }
    else if(elemento==="4"){
       
        bloco[3].innerHTML ="Caneta Bic"        
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
}
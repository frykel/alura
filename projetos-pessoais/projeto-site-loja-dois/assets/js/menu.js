const menu = document.querySelector("[data-link]")
const contato = document.querySelector("[data-contato]")
const produtosSetor=document.querySelectorAll("[data-setor]")
const setores = ["moda","festa","decor","cama","mesa","banho"]
const separadores = {
"moda":[],
"festa":[],
"decor":[],
"cama":[],
"mesa":[],
"banho":[]
}
const tamanho = Object.keys(separadores).length //calcula o tamanho de um objeto

produtosSetor.forEach((elemento)=>{
   // console.log(elemento.dataset.setor)
    //console.log(elemento.innerHTML)
    
    for(var i=0; i<tamanho;i++){
            
        if(elemento.dataset.setor===setores[i]){
            separadores[setores[i]].push(elemento.innerHTML)
           
        }
    }

    
})

colocaOrdem(separadores)

function colocaOrdem(objeto){

    for(var i=0; i<tamanho;i++){
        objeto[setores[i]].sort()
    }
}
var cont=0;
var i=0;
produtosSetor.forEach((elemento)=>{
   
   if(cont>=separadores[setores[i]].length){
    i++
    cont=0
   }
    elemento.innerHTML=separadores[setores[i]][cont]    
      cont++  
    //elemento.attributes[2].textContent="a"
    
      
    }   

)

menu.addEventListener("mouseenter",(elemento)=>{
if(elemento.target.childNodes[3].style.display==="flex"){
    elemento.target.childNodes[3].style.display="none"
}
else{
    elemento.target.childNodes[3].style.display="flex"
}


}
)
menu.addEventListener("mouseleave",(elemento)=>{
    elemento.target.childNodes[3].style.display="none"
})

contato.addEventListener("mouseenter",(elemento)=>{
   
    if(elemento.target.childNodes[1].style.display==="flex"){
        elemento.target.childNodes[1].style.display="none"
    }
    else{
        elemento.target.childNodes[1].style.display="flex"
        
    }
    
    
    }
    )
    contato.addEventListener("mouseleave",(elemento)=>{
        elemento.target.childNodes[1].style.display="none"
    })
    
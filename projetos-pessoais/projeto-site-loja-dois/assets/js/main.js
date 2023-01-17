const departamentos = document.querySelectorAll("[data-departamento]")

for(var i=0;i<departamentos.length;i++)
{   

}

const produtos = {
    moda: ['Viscose ',
    'tricoline ','oxford ','two way ','linho ','tecido fantasia ','percal ','malhas ','tecidos de exclusividade'],
    festa: ['Tule Bordado', 'Cetim Duchese'],
    cama: ['Colcha','Travesseiro','Protetor'],
    decor: ['Cortina','Almofada','Tapetes','Tecido p/ Sofa'],
    banho:['Toalha','Roupão'],
    mesa:['Sousplat',"Serviço Americano",'Anel p/ Guardanapos']      
    
}
const caixa = document.createElement('div')
departamentos.forEach((elemento) =>{
elemento.addEventListener("mouseenter",(evento)=>{
    const t = evento.target.dataset.departamento      
    elemento.classList.remove(t)
    elemento.childNodes[1].style.display='none'
    const caixa = document.createElement('div')
    caixa.classList.add('caixa')           
    elemento.appendChild(caixa)  
    console.log(t)
    
    for(var i=0;i<produtos[t].length;i++){
    const text = document.createElement('p')
    text.classList.add('texto')
    text.innerHTML=produtos[t][i]
    caixa.appendChild(text)      
    }
    removeElemento(caixa,elemento)
    
         
})
})
function removeElemento(item,elemento){     
        elemento.addEventListener("mouseout",(evento)=>{
            elemento.classList.add(evento.target.dataset.departamento)                
            item.remove()
            elemento.childNodes[1].style.display='block'
    })                        
    }  

function modificaElemento(mod){
    elemento.classList.remove(t)
    elemento.childNodes[1].style.display='none'
    const caixa = document.createElement('div')
    caixa.classList.add('caixa')           
    elemento.appendChild(caixa) 
}
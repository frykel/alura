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

departamentos.forEach((elemento) =>{
elemento.addEventListener("mouseover",(evento)=>{
    const t = evento.target.dataset.departamento  
    elemento.classList.remove(evento.target.dataset.departamento)
    
    const caixa = document.createElement('div')
    caixa.classList.add('caixa')
  
    for(var i=0;i<departamentos.length;i++){
       
    if(t==departamentos[i].t){
    departamentos[i].appendChild(caixa)
    console.log(1)
    }
    }  
    
    for(var i=0;i<produtos[t].length;i++){
    const text = document.createElement('p')
    text.classList.add('texto')
    text.innerHTML=produtos[t][i]
    caixa.appendChild(text)      
    }

    elemento.addEventListener("mouseout",(evento)=>{
        elemento.classList.add(evento.target.dataset.departamento)
        for(var i=0;i<departamentos.length;i++){
            if(t==departamentos[i].t){
            departamentos[i].removeChild(caixa)
            }
            }  
            
    })    
})
})
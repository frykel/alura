const departamentos = document.querySelectorAll("[data-departamento]")

const produtos = {
    moda: ['Viscose ',
    'Tricoline ','Linho ','Tecido p/ fantasia ','Percal ','Malhas ','Tecidos Personalizados','Couros','Alfaiatarias','Cambraias'],
    festa: ['Tule Bordado', 'Tecidos de Festa', 'Tule com Pedraria', 'Crepes', 'Paête', 'Lurex'],
    cama: ['Colcha','Travesseiro','Protetor de Colchão', 'Lençol', 'Fronha'],
    decor: ['Cortina','Almofada','Tapetes','Tecido p/ Sofa','Pingentes','Mantas','Kit Cozinha', 'Plásticos'],
    banho:['Toalha','Roupão'],
    mesa:['Sousplat',"Serviço Americano",'Anel p/ Guardanapos', 'Guardanapos']      
    
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
        elemento.addEventListener("mouseleave",(evento)=>{
            elemento.classList.add(evento.target.dataset.departamento)                
            item.remove()
            elemento.childNodes[1].style.display='block'
    })                        
    }  


const departamentos = document.querySelectorAll("[data-departamento]")

const produtos = {
    moda: ['Viscose','tricoline'],
    festa: ['Tule Bordado', 'Cetim Duchese'],
    cama: ['Colcha','Travesseiro','Protetor'],
    decor: ['Cortina','Almofada','Tapetes','Tecido p/ Sofa'],
    banho:['Toalha','Roupão'],
    mesa:['Sousplat',"Serviço Americano",'Anel p/ Guardanapos']      
    
}

departamentos.forEach((elemento) =>{
elemento.addEventListener("mouseover",(evento)=>{
    elemento.classList.remove(evento.target.dataset.departamento)
    const t = evento.target.dataset.departamento
    const text = document.createElement('p')
    text.innerHTML=produtos[t]
    departamentos[0].appendChild(text)    

    
})
elemento.addEventListener("mouseout",(evento)=>{
    elemento.classList.add(evento.target.dataset.departamento)
    departamentos[0].removeChild(text)
})})
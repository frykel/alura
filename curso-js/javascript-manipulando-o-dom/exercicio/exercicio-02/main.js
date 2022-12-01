
const seletores = document.querySelectorAll("[data-operacao]");

seletores.forEach((elemento)=>{

    elemento.addEventListener("click",(evento)=>{
        console.log(evento.target.parentNode)
        checaOperacao(evento.target.dataset.operacao,evento.target.parentNode)
    })

})

function checaOperacao(operacao,operador){
    let contador = operador.querySelector("[data-nome]");
    console.log(contador.value)

    if(operacao=== "+"){
        contador.value = parseInt(contador.value) + 1;
        
    }

    else{
        if(contador.value > 0){
      
        contador.value = parseInt(contador.value) - 1;
        }
    }
    return contador.value;
}

function calculaMedia(a,b,c){
    let med = 0

    console.log(a.value+b.value+c.value+seletores);
    med = ((parseInt(a.value)+parseInt(b.value)+parseInt(c.value)))/3;
    med = med.toFixed(2);
    res.innerHTML= `Sua média é ${med}.`
}

const media = document.querySelector(".media");
const notas = document.querySelectorAll("[data-nome]");
const res = document.querySelector(".res")
media.addEventListener("click",()=>{

    calculaMedia(notas[0],notas[1],notas[2]); 
})

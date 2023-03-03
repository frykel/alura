
const botao = document.querySelectorAll("[data-botao]")
const resposta = document.querySelectorAll("[data-resposta]")

console.log(botao)

botao.forEach(elemento => {
    elemento.addEventListener("click",((evento)=>{
        console.log(evento.dataset)
    }))
})
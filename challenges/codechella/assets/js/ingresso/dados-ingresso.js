import imprimeIngresso from "./imprime-ingresso.js"
function dados(evento){
evento.preventDefault()
console.log(evento)
const nome = evento.target.elements.nome.value
//const email = evento.target.elements.email.value
const tipo = evento.target.elements.ingresso.value
//const data = evento.target.elements.data.value
imprimeIngresso(nome,tipo)    
}
const form = document.querySelector("#form")
form.addEventListener("submit",(evento)=>{
dados(evento)
window.location.assign("../pages/pos-compra-ingresso.html")
}
)

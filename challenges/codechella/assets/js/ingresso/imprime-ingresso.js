export default function imprimeIngresso(nome,tipo){
const localNome = document.querySelector(".ingresso__bonus")
const localSetor = document.querySelector(".ingresso__setor")
localNome.innerHTML = nome
localSetor.innerHTML = tipo
}
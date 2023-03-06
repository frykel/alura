function dado(nome,email,tipo,data){

const dados = {
    "nome" : "",
    "email" : "",
    "tipo": "",
    "data": ""
}
dados["nome"] = nome
dados["email"] = email
dados["tipo"] = tipo
dados["data"] = data

    return dados
}
const form = document.querySelector("#form")
form.addEventListener("submit",(evento)=>{
dado(evento.target.elements["nome"].value,evento.target.elements["email"].value,evento.target.elements["ingresso"].value,evento.target.elements["data"].value)    
   
}
)

export const informacoes = {
    dado
}
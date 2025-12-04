const formulario = document.querySelector("#form")

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    
    
    const dadosDoFormulario = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "ingresso": e.target.elements["ingresso"].value,
        "data": e.target.elements["data"].value
    }
    localStorage.setItem("dados",JSON.stringify(dadosDoFormulario))
    window.location.href = "./pos-compra-ingresso.html"
})




const inputSenha = document.getElementById('senha')
const botaoSenha = document.querySelector(".botao-senha")
const senha = "acesseosite531"
const jaPassouPelaManutencao = sessionStorage.getItem("passouPelaManutencao")
const mensagemErro = document.querySelector(".erro")

/*if(!jaPassouPelaManutencao){
    window.location.href="principal.html"
}
*/
botaoSenha.addEventListener("click",()=>{
    
    if(inputSenha.value == senha){
        window.location.href = "principal.html"
        
    }
    else{
        mensagemErro.innerHTML = "A senha está errada"
    }
})
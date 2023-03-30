


function carregamento(){
    
   
    window.location.replace("assets/html/pagina-construcao.html")
   
    
}

const inputSenha = document.getElementById('senha')
const botaoSenha = document.querySelector(".botao-senha")
const senha = "acesseosite531"


botaoSenha.addEventListener("click",()=>{
    
    if(inputSenha.value == senha){
        window.location.href = "../../index.html"
        
    }
    else{
        console.log("senha incorreta")
    }
})
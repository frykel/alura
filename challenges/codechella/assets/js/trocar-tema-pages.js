
const botao = document.querySelector("[data-tema]")
const cabecalho = document.querySelector(".cabecalho__container")
const corpo = document.querySelector(".corpo")
const rodape = document.querySelector(".rodape")
const logoRodape = document.querySelector(".rodape__informacoes__logo")
const logoRedes = document.querySelectorAll(".logo__redes")
const enderecoLogoRedes = ["../imagens/footer/desktop/whatsapp-branco.png","../imagens/footer/desktop/twitch-branco.png","../imagens/footer/desktop/instagram-branco.png","../imagens/footer/desktop/twitter-branco.png"]
const enderecoLogoRedesRetorno = ["../imagens/footer/desktop/whatsapp.png","../imagens/footer/desktop/twitch.png","../imagens/footer/desktop/instagram.png","../imagens/footer/desktop/twitter.png"]
let con = 0

botao.addEventListener("click",(evento)=>{
    
    if(con==0){
        trocarBotaoBoreal()        
        cabecalho.classList.add('cabecalho__container__boreal')           
        corpo.classList.add('corpo__boreal')
        rodape.classList.add("rodape__boreal")
        
        logoRodape.src="../imagens/footer/desktop/logo-branca.png"
        var i = 0
        logoRedes.forEach((evento) =>{
            
            evento.src = enderecoLogoRedes[i]
            i++
        })
        
    
    con++
  
    }else{
        trocarBotaoVerao()
       
        cabecalho.classList.remove('cabecalho__container__boreal')
        corpo.classList.remove('corpo__boreal')
        rodape.classList.remove("rodape__boreal")

        logoRodape.src="../imagens/footer/desktop/logo-cinza.png"

        var i = 0

        logoRedes.forEach((evento) =>{
            
            evento.src = enderecoLogoRedesRetorno[i]
            i++
        })
        
        
    con=0
    }

})

function trocarBotaoBoreal(){
    botao.style.backgroundImage="linear-gradient(to bottom, var(--primay-bg-color),var(--secondary-bg-color),var(--terciary-bg-color))"
    botao.style.color="black"
}
function trocarBotaoVerao(){
    botao.style.backgroundImage="linear-gradient(to bottom, var(--primay-bg-color-2),var(--secondary-bg-color-2),var(--terciary-bg-color-2))"
    botao.style.color="white"
}

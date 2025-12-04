
const botao = document.querySelector("[data-tema]")
const cabecalho = document.querySelector(".cabecalho__container")
const rodape = document.querySelector(".rodape")
const logoRodape = document.querySelector(".rodape__informacoes__logo")
const logoRedes = document.querySelectorAll(".logo__redes")
const enderecoLogoRedes = ["assets/imagens/footer/desktop/whatsapp-branco.png","assets/imagens/footer/desktop/twitch-branco.png","assets/imagens/footer/desktop/instagram-branco.png","assets/imagens/footer/desktop/twitter-branco.png"]
const enderecoLogoRedesRetorno = ["assets/imagens/footer/desktop/whatsapp.png","assets/imagens/footer/desktop/twitch.png","assets/imagens/footer/desktop/instagram.png","assets/imagens/footer/desktop/twitter.png"]
let con = 0

botao.addEventListener("click",(evento)=>{
    
    if(con==0){
        trocarBotaoBoreal()        
        cabecalho.classList.add('cabecalho__container__boreal')    

        
         
        rodape.classList.add("rodape__boreal")
        
        logoRodape.src="assets/imagens/footer/desktop/logo-branca.png"
        var i = 0
        logoRedes.forEach((evento) =>{
            
            evento.src = enderecoLogoRedes[i]
            i++
        })
        
    
    con++
  
    }else{
        trocarBotaoVerao()
       
        cabecalho.classList.remove('cabecalho__container__boreal')

        bannerPrincipal.classList.remove('banner__boreal','banner__texto__boreal')

        corpo.classList.remove('corpo__boreal')

        imagemData.src="assets/imagens/body/desktop/sobre-pessoas.jpg"

        tituloDia.forEach((evento)=>{
            evento.classList.remove("lineup__dia__titulo__boreal") 
        })
        linha.forEach((evento)=>{
            evento.classList.remove('linha__boreal')
        })
        imagemRodape.classList.remove("banner__rodape__boreal")

        rodape.classList.remove("rodape__boreal")

        logoRodape.src="assets/imagens/footer/desktop/logo-cinza.png"

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

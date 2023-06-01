const bannerPrincipal = document.querySelector("#banner__principal")
const corpo = document.querySelector(".corpo")
const imagemData = document.querySelector(".data__imagem__arquivo")
const tituloBandas = document.querySelector(".atracoes__titulo")
const tituloDia = document.querySelectorAll(".lineup__dia__titulo")
const linha = document.querySelectorAll(".linha")
const imagemRodape = document.querySelector(".banner__rodape")
let cont = 0

botao.addEventListener("click",(evento)=>{
    
    if(cont==0){
        bannerPrincipal.classList.add('banner__boreal','banner__texto__boreal')

        corpo.classList.add('corpo__boreal')

        imagemData.src="assets/imagens/body/desktop/sobre-boreal.jpg"

        tituloDia.forEach((evento)=>{
            evento.classList.add("lineup__dia__titulo__boreal") 
        })
        linha.forEach((evento)=>{
            evento.classList.add('linha__boreal')
        })
        imagemRodape.classList.add("banner__rodape__boreal")
    
        cont++
    }else{
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

        cont=0
    }
    
})
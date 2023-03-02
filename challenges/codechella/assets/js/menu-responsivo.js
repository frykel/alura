
const icone = document.querySelector("#icone__menu")
const menu = document.querySelector(".cabecalho__menu__suspenso")
icone.addEventListener("click",()=>{

    if(menu.style.display=="block"){
        menu.style.display="none"
    }
    else{
        menu.style.display="block" 
    }

})


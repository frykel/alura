const menu = document.querySelector(".produtos")
const produtosModa=document.querySelectorAll("[data-moda]")



console.log(produtosModa[0])
menu.addEventListener("click",(evento)=>{
    evento.style.display="block"
    console.log("eu")
})
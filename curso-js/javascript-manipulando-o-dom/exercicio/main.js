const lista = document.querySelectorAll("[cor]");

const botaoEsconde=document.querySelector("[data-esconde]")

botaoEsconde.addEventListener("click",()=>{
    escondeTintas();
})

function mostraTintas(){
for(var i=0;i<lista.length;i++){
lista[i].style.display="block"
}
}
function escondeTintas(){
    for(var i=0;i<lista.length;i++){
    lista[i].style.display="none"
    }
    }
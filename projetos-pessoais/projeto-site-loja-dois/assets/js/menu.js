const menu = document.querySelector(".produtos")
const produtosSetor=document.querySelectorAll("[data-setor]")
const setores = ["moda","festa","decor","cama","mesa","banho"]
const separadores = {
"moda":[],
"festa":[],
"decor":[],
"cama":[],
"mesa":[],
"banho":[]
}
const tamanho = Object.keys(separadores).length //calcula o tamanho de um objeto

produtosSetor.forEach((elemento)=>{
   // console.log(elemento.dataset.setor)
    //console.log(elemento.innerHTML)
    console.log(separadores)
    for(var i=0; i<tamanho;i++){
            
        if(elemento.dataset.setor===separadores){
            separadores[i].push(elemento.innerHTML)
            console.log(1)
        }
    }
    
})





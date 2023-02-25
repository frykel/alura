import { conexaoApi } from "./api.js";
const produtos = document.querySelectorAll("[data-setor]")

for(var i=0;i<6;i++){
    if(produtos[i].dataset.setor==produtos[i].dataset.setor){
        console.log(produtos[i].dataset.setor)
        exibirLinksNaTela(produtos[i].dataset.setor,i)
       
    }
}
async function exibirLinksNaTela(departamento,numeroDepartamento){
    
    const linksApi = await conexaoApi.buscaListaDeProdutos(departamento)
    const tituloDoSetor = document.createElement("h3")
    tituloDoSetor.className="produtos-setor-titulo"
    tituloDoSetor.innerHTML=departamento
    
    produtos[numeroDepartamento].appendChild(tituloDoSetor)

    const blocoDeLink = document.createElement("div")
    blocoDeLink.className = "produtos-setor-item"
    produtos[numeroDepartamento].appendChild(blocoDeLink)

    linksApi.forEach(link => produtos[numeroDepartamento].appendChild(constroiLinks(link.urlindex,blocoDeLink,link.titulo)));

}
function constroiLinks(urlIndex,bloco,titulo){

    bloco.innerHTML=`<a class="item" href="${urlIndex}">${titulo}</a>`
    
    
    
}

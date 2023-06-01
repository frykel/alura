import { conexaoApi } from "./api.js";
const produtosDepartamento = document.querySelectorAll("[data-setor]")

for(var i=0;i<6;i++){
    if(produtosDepartamento[i].dataset.setor==produtosDepartamento[i].dataset.setor){
       
        exibirLinksNaTela(produtosDepartamento[i].dataset.setor,i)
       
    }
}
async function exibirLinksNaTela(departamento,num){
    
    const linksApi = await conexaoApi.buscaListaDeProdutos(departamento)
    console.table(linksApi[linksApi.length-1])

    let tituloDoSetor = document.createElement("h3")
    tituloDoSetor.className="produtos-setor-titulo"
    tituloDoSetor.innerHTML=departamento
    
    produtosDepartamento[num].appendChild(tituloDoSetor)

    linksApi.forEach(links => produtosDepartamento[num].appendChild(criaLink(links.titulo,links.urlindex)));

}
function criaLink(nome,link){
    const categoria = document.createElement("div")
    categoria.innerHTML =`
        <a href =${link} class="item">${nome}</a>
    `
    return categoria
}
    /*const tituloDoSetor = document.createElement("h3")
    tituloDoSetor.className="produtos-setor-titulo"
    tituloDoSetor.innerHTML=departamento
      
    produtos[numeroDepartamento].appendChild(tituloDoSetor)

    const blocoDeLink = document.createElement("div")
    blocoDeLink.className = "produtos-setor-item"
    produtos[numeroDepartamento].appendChild(blocoDeLink)

   //linksApi.forEach(link => produtos[numeroDepartamento].appendChild(constroiLinks(link.urlindex,blocoDeLink,link.titulo)));
*/


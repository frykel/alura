import { conexaoApi } from "./api.js"
const produtosDepartamento = document.querySelectorAll("[data-setor]")
const secaoPrincipal = document.querySelector(".principal")
const nomeDoProduto = document.querySelector("#nome__produto")

function exibeProdutos(nome,descricao){
    
    const descricaoDoProduto = document.createElement("section")
    descricaoDoProduto.className = "produto-principal"

    descricaoDoProduto.innerHTML = `<h2 class= "produto-titulo">${nome}</h2>
        <p class="produto-descritivo">${descricao}</p>
    `
    return descricaoDoProduto
}

async function produtos (departamento){

    const linksApi =  await conexaoApi.buscaListaDeProdutos(departamento)
    linksApi.forEach(link => {
        if(link.titulo === nomeDoProduto.textContent){
        secaoPrincipal.appendChild(exibeProdutos(link.titulo, link.descricao)) 
        }
    }
              
    );
}

for(var i=0;i<6;i++){
    if(produtosDepartamento[i].dataset.setor==produtosDepartamento[i].dataset.setor){
       
        produtos(produtosDepartamento[i].dataset.setor)
       
    }
}
import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

async function buscaVideo(evento){
    evento.preventDefault()
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value

    const busca = await conectaApi.buscaVideo(dadosDePesquisa)
    const lista = document.querySelector("[data-lista]")
    console.log(busca)
    while(lista.firstChild){
        lista.removeChild(lista.firstChild); //remove todos os vídeos da lista
    }

    busca.forEach(elemento =>lista.appendChild(constroiCard(elemento.titulo,elemento.descricao,elemento.url,elemento.imagem))    
    );
    if(busca.length==0){
        lista.innerHTML=`<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`
    }
}

botaoDePesquisa.addEventListener("click",evento => buscaVideo(evento))


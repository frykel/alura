const divProdutos = document.querySelectorAll(".produtos-setor-item")
let linkProdutos = []
const mainLink = 'https://frykel.github.io/alura/projetos-pessoais/projeto-site-loja-dois/assets/json/enderecos.json'


buscaListaDeProdutos()
async function buscaListaDeProdutos(){
    const r = await fetch(mainLink)
    linkProdutos = await r.json()
    console.table(linkProdutos["moda"][0].url)
    exibirLinksNaTela(linkProdutos["moda"])
}

function exibirLinksNaTela(links){
    links.forEach((link) => {
       
        divProdutos[0].innerHTML = `
            <a class="item" data-setor="moda" href="${link.url}">Viscose</a>`
        
    });

}

const divProdutos = document.querySelector(".produtos")
const linkProdutos = []

async function buscaListaDeProdutos(){
    const r = await fetch('../json/enderecos.json')
    linkProdutos = r.json()
}
console.log(linkProdutos)
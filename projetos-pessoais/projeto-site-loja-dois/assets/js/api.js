
const links={
    "moda": "http://localhost:3000/moda",
    "festa": "http://localhost:3000/festa",
    "cama": "http://localhost:3000/cama",
    "decor": "http://localhost:3000/decor",
    "banho": "http://localhost:3000/banho",
    "mesa": "http://localhost:3000/mesa"
}



async function buscaListaDeProdutos(departamento){
    const r = await fetch(`http://localhost:3000/${departamento}`)
    const linkProdutos = await r.json()
    
    return linkProdutos
}


export const conexaoApi = {
    buscaListaDeProdutos
}
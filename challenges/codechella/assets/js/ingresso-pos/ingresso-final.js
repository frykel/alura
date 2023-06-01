const camposIngresso = document.querySelectorAll("[data-info]")

console.log(camposIngresso)

function ImprimeDadosDoIngresso(campo){
    const receberDadosExistentes = localStorage.getItem("dados")
    const converteRetorno = JSON.parse(receberDadosExistentes)

    campo[0].textContent = converteRetorno["nome"]
    campo[1].textContent = converteRetorno["ingresso"]
    console.log(converteRetorno)
}
ImprimeDadosDoIngresso(camposIngresso)
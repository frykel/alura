import { conectaApi } from "./dados-api.js"

const ingresso = document.querySelectorAll("[data-info]")

async function ingressoImpresso(){

    const listaPessoas = await conectaApi.mostraPessoa()

   ingresso[0].textContent=listaPessoas[listaPessoas.length-1].nome
   ingresso[1].textContent=listaPessoas[listaPessoas.length-1].ingresso

}

ingressoImpresso()
import { conectaApi } from "./dados-api.js";

const formulario = document.querySelector("#form")

async function criaPessoa(evento){
    evento.preventDefault();
    const nome = document.querySelector("#nome").value; //queremos só o que o usuário digitar, então .value
    const email = document.querySelector("#email").value;
    const data = document.querySelector("#data").value;
    const ingresso = document.querySelector("#ingresso").value;
    
    await conectaApi.criaPessoa(nome, email, data, ingresso)

    window.location.href = "../pages/pos-compra-ingresso.html";
}

formulario.addEventListener("submit", evento => criaPessoa(evento))
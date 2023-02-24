import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]")

async function criaVideo(evento){
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem]").value; //queremos só o que o usuário digitar, então .value
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random()*10).toString();
    try{
    await conectaApi.criaVideo(titulo, descricao, url, imagem)

    window.location.href = "../pages/envio-concluido.html";
    }catch(e){
        while(formulario.firstChild){
            formulario.removeChild(formulario.firstChild)
        }
        const erro = document.createElement('h2')
        erro.className="formulario__titulo"
        erro.style.fontSize="3rem"
        erro.innerHTML=e        
        formulario.appendChild(erro)

    }
}

formulario.addEventListener("submit", evento => criaVideo(evento))
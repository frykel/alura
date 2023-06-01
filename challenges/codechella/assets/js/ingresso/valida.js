import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");
    
camposDoFormulario.forEach((campo)=>{
    campo.addEventListener("blur",()=>verificaCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())
    
    /*O event listener do tipo invalid será ativado quando um dos campos do formulário for inválido, ou seja, o usuário não digitou as informações da maneira correta. Como queremos personalizar as mensagens de erro, usamos o preventDefault para bloquear a resposta padrão do html que é o aparecimento de um pop-up dizendo que está inválido.*/ 
})
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    
    data: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 16 anos para comprar o ingresso.'
    }
  
}

function verificaCampo(campo){
    let mensagem = "";
    campo.setCustomValidity('') /*O comando usado aqui serve para resetar a validação e apagar possíveis mensagens de erro caso o usuário já tenha digitado e encontrado erros, e queira digitar novos dados, fazendo então uma nova validação*/
    if(campo.name == "data" && campo.value != ""){
        ehMaiorDeIdade(campo)
    }
    tiposDeErro.forEach(erro =>{
        if(campo.validity[erro]){/*O comando .validity mostra todos os erros que são possíveis em um campo */
        mensagem = mensagens[campo.name][erro]
        
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro')
    const validadorDeInput = campo.checkValidity()

    if(!validadorDeInput){
        mensagemErro.textContent = mensagem;
    }else{
        mensagemErro.textContent = "";
    }
}
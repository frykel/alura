async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try{
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`) //acessa a API viacep para verificar o CEP /informado (01001000)
var consultaCepConvertida = await consultaCep.json() //converte consultaCep para json
//o parâmetro await só pode ser usado dentro de uma função assincrona (async function)
if(consultaCepConvertida.erro){
    throw Error('CEP não existe')
}
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');
    var bairro = document.getElementById('bairro')

    cidade.value = consultaCepConvertida.localidade
    logradouro.value = consultaCepConvertida.logradouro
    estado.value = consultaCepConvertida.uf
    bairro.value = consultaCepConvertida.bairro

    console.log(consultaCepConvertida)
    return consultaCepConvertida;
    } catch(erro){

        if(erro.name=="TypeError"){
            console.log("Digite um CEP válido com 8 dígitos")
        }
        else{
        mensagemErro.innerHTML = `<p>CEP inválido, tenta novamente! </p>`
        console.log(erro)
        }
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout",()=>{
    buscaEndereco(cep.value)

    
})
/*
let ceps = ['01001000','01001001']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))

*/

/*
.then(resposta => resposta.json()) //como o retorno da API é em bytes, convertemos elas para o formato JSON, que é similar a um objeto em JavaScript
.then(r =>{ 
    if(r.erro){
        throw Error("Esse CEP não existe!")

    }else{
        console.log(r)
    }
    

}) //após a linha anterior aplicamos outro método then para imprimir a resposta na tela (no console)
.catch(erro =>console.log(erro)) //o método catch irá imprimir um erro caso o CEP digitado esteja errado
.finally(mensagem => console.log('Procedimento finalizado!'))
*/

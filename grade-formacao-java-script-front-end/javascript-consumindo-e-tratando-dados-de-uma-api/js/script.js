async function buscaEndereco(){
var consultaCep = await fetch('https://viacep.com.br/ws/59066050/json/') //acessa a API viacep para verificar o CEP /informado (01001000)
var consultaCepConvertida = await consultaCep.json() //converte consultaCep para json
//o parâmetro await só pode ser usado dentro de uma função assincrona (async function)
    console.log(consultaCepConvertida)
}

buscaEndereco()
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

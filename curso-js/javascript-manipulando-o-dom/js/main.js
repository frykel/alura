//const imagemRobotron = document.querySelector('#robotron');
/*Posso delcarar função anônima de duas formas, usando o function (){} ou simplesmente () => {}, conforme as variantes abaixo:
imagemRobotron.addEventListener("click",function(){
    console.log('Olá, bem vindo')
})

OU

imagemRobotron.addEventListener("click", () => {
    console.log('Olá, bem vindo')
})

Diferentemente de funções nomeadas (como a função dizOi() abaixo) as funções anônimas só podem ser chamadas uma vez
*/
/*imagemRobotron.addEventListener("click",() =>{
    console.log (f);
})

function dizOi(){
console.log('Olá')
console.log('Bem vindo ao Programa')
}
*/

/*
Podemos usar os comandos abaixo para configurar um dos equipamentos do robô, mas para isso precisariamos repetir esses comandos para cada equipamento, logo não seria recomendado:

const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');

subtrair.addEventListener("click",() => {
    braco.value -= 1;
});
somar.addEventListener("click",() => {
    braco.value = parseInt(braco.value) + 1;      
});

Mais viável usar o abaixo:
*/

const controle = document.querySelectorAll('.controle-ajuste');


controle.forEach((elemento) => {

    elemento.addEventListener("click",(evento) => {
        manipulaDados(evento.target.textContent,evento.target.parentNode)
        /*Aqui estamos passando dois tipos de parâmetros para a função manipulaDados:
        o primeiro evento.target.textContent irá nos retornar o valor + ou - necessario para identificar a operação

        o segundo evento.target.parentNode irá retornar o elemento pai no html, nesse caso a div da classe controle
        */
    })
})

 function manipulaDados(operacao,controle){
    /*Para não precisar procurar o contador em todo o documento do html, iremos usar ao inves do document.querySelector(), usaremos controle.querySelector(), conforme abaixo para pesquisar somente dentro da div passada como parâmetro (fazemos isso por dois motivos, o primeiro é para não termos que pesquisar em todo o html, o segundo e mais importante é para que somente a classe controle-contador do elemento que foi clicado seja modificada, já que temos outros elementos com essa classe) dentro da div pai iremos procurar  */
    const peca = controle.querySelector('.controle-contador')
    if(operacao === "+"){
        peca.value = parseInt(peca.value) + 1;
    }
    else{
        peca.value = parseInt(peca.value) - 1;
    }
    return peca.value;
 }



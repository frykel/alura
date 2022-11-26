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
const contador = document.querySelectorAll('.controle-contador');

controle.forEach((elemento) => {

    elemento.addEventListener("click",(evento) => {
        manipulaDados(evento.target.textContent)
    })
})

 function manipulaDados(operacao){
    if(operacao === "+"){
        
    }
    else{

    }
 }



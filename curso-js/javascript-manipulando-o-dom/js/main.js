let imagemRobotron = document.querySelector('#robotron');
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
imagemRobotron.addEventListener("click",() =>{
    console.log (f);
})

function dizOi(){
console.log('Olá')
console.log('Bem vindo ao Programa')
}
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

/*Ao inves de usar a classe como buscador para o meu querySelector, usaremos o data-attributes implementado no html */
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {

    elemento.addEventListener("click",(evento) => {
        /*Como estamos usando o data-attributes como parâmetro ao inves do elemento propriamente dito,não
        precisamos buscar a função com textContent --> manipulaDados(evento.target.textContent,evento.target.parentNode), ao inves disso fazemos como abaixo:*/
        manipulaDados(evento.target.dataset.controle,evento.target.parentNode)
        /*Aqui estamos passando dois tipos de parâmetros para a função manipulaDados:
        o primeiro evento.target.textContent irá nos retornar o valor + ou - necessario para identificar a operação

        o segundo evento.target.parentNode irá retornar o elemento pai no html, nesse caso a div da classe controle
        */
       atualizaEstatistica(evento.target.dataset.pecas,evento.target.dataset.controle)
    })
})

 function manipulaDados(operacao,controle){
    /*Para não precisar procurar o controle-contador em todo o documento do html, iremos usar ao inves do document.querySelector(), usaremos controle.querySelector(), conforme abaixo para pesquisar somente dentro da div passada como parâmetro (fazemos isso por dois motivos, o primeiro é para não termos que pesquisar em todo o html, o segundo e mais importante é para que somente a classe controle-contador do elemento que foi clicado seja modificada, já que temos outros elementos com essa classe) dentro da div pai iremos procurar  */

    /*assim como foi feito lá em cima iremos usar um datta attribute para buscar um elemento do html ao invés 
    da classe, que neste caso era: const peca = controle.querySelector('.controle-contador') e ficará como abaixo: */
    const peca = controle.querySelector('[data-contador]');
    if(operacao === "+"){
        peca.value = parseInt(peca.value) + 1;
    }
    else{
        peca.value = parseInt(peca.value) - 1;
    }
    return peca.value;
 }
 
 function atualizaEstatistica(peca,operacao){

    estatisticas.forEach((elemento) => {
        if( operacao === "+"){
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        }
        else{
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        }
        return elemento.textContent;
        
    })

 }
 const imgRobo = document.querySelector("#robotron");
 const cores = ['img/robotron-amarelo/robotron-amarelo.png','img/robotron-azul/robotron-azul.png','img/robotron-branco/robotron-branco.png','img/robotron-preto/robotron-preto.png','img/robotron-rosa/robotron-rosa.png','img/robotron-vermelho/robotron-vermelho.png']
 let cont = 0;
 imgRobo.addEventListener("click",()=>{
    
    trocaImagem(imgRobo,cores,cont)
    
    
 })
 function trocaImagem(imagem,cor,contador){
    imagem.src = cor[contador];
    if(cont<cor.length-1){
        cont = cont + 1;
        }
        else{
        cont=0;
        }
        

 }
//site para dar deploy (colocar online o site)


function TocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');


for (let n = 0;n<listaDeTeclas.length;n++){
  
const instrumento = listaDeTeclas[n].classList[1]; //esse comando classlist pesquisa e traz a class listada no html do elemento na posição [1] do elemento listaDeTeclas[n]
const tecla = listaDeTeclas[n];
//template string ${}
const idAudio = `#som_${instrumento}`;
console.log(idAudio);
tecla.onclick =function (){ 
/*Neste caso não se pode implementar a função TocaSom diretamente com um atributo ou parâmetro porque o browser irá bloquear (o browser irá exigir interação do usuário). Desta forma implementamos ela sem o ().

Para contornar esse "problema" usamos uma função anonima e executamos a função TocaSom com parâmetro dentro dela. listaDeTeclas[n].onclick =function (){} --> Função anonima */

TocaSom(idAudio);

}
/* Para situações em que o usuário não interaja usando o mouse click, como por exemplo tab, enter ou barra de espaço iremos adicionar o evento onkeydown, que é ativado quando qualquer tecla é pressionada e iremos adicionar uma classe para uso de estilo no css somente quando a interação é dessa maneira*/

tecla.onkeydown = function(){
    
    tecla.classList.add('ativa');
}
tecla.onkeyup = function(){
    
    tecla.classList.remove('ativa');
}
}



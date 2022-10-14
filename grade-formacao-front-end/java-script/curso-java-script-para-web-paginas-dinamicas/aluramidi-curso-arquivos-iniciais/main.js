"use strict"
function TocaSom (seletorAudio){
    /* Poderiamos deixar nossa estrutura de seleção de audio do jeito que está abaixo:
    document.querySelector(idElementoAudio).play();,

    Mas para evitar que alguem passe um atributo que não seja nossas classes de audio, usaremos uma condição como abaixo: */

    const elemento = document.querySelector(seletorAudio)
    
    if (elemento && elemento.localName === 'audio'){ // posso substituir elemento != null por elemento que o javascript já ira entender que ele está falando para elementos que existem ou que tem valor e não são nulos.

        /* para termos certeza que o atributo passado é um audio, verificamos se seu nome (localName é de um elemento do tipo audio), conforme acima. */      
        elemento.play();
    }
    else{ //primeiro verificamos se não é um elemento nulo

    alert('Valor inválido');

    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');


for (let n = 0;n<listaDeTeclas.length;n++){
  
const instrumento = listaDeTeclas[n].classList[1]; //esse comando classlist pesquisa e traz a class listada no html do elemento na posição [1] do elemento listaDeTeclas[n]
const tecla = listaDeTeclas[n];
//template string ${}
const idAudio = `#som_${instrumento}`;

tecla.onclick =function (){ 
/*Neste caso não se pode implementar a função TocaSom diretamente com um atributo ou parâmetro porque o browser irá bloquear (o browser irá exigir interação do usuário). Desta forma implementamos ela sem o ().

Para contornar esse "problema" usamos uma função anonima e executamos a função TocaSom com parâmetro dentro dela. listaDeTeclas[n].onclick =function (){} --> Função anonima */

TocaSom(idAudio);

}
/* Para situações em que o usuário não interaja usando o mouse click, como por exemplo tab, enter ou barra de espaço iremos adicionar o evento onkeydown, que é ativado quando qualquer tecla é pressionada e iremos adicionar uma classe para uso de estilo no css somente quando a interação é dessa maneira*/

/* Para casos de qualquer tecla pressionada ativar a classe usamos o código abaixo:

tecla.onkeydown = function(){
    
    tecla.classList.add('ativa');
}

Mas se quisermos adicionar a classe em situaçõe específicas (por exemplo somente quando apertarmos a tecla espaço ou enter), faremos como asseguir:
*/

tecla.onkeydown = function(evento){

     let event = evento.code;
    if(event === 'Space' || event === 'Enter' || event === 'NumpadEnter'){
        tecla.classList.add('ativa');
    }
}

tecla.onkeyup = function(){
    
    tecla.classList.remove('ativa');
}
}



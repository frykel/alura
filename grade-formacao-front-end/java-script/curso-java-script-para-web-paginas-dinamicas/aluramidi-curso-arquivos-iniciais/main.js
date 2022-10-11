
const listaDeTeclas = document.querySelectorAll('.tecla');

let n=0;

while (n<listaDeTeclas.length)

function TocaSom (){
    document.querySelector('#som_tecla_pom').play();
}

listaDeTeclas[n].onclick = TocaSom;

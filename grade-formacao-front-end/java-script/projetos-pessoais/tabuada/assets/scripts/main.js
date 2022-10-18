let num = document.querySelector('#ntabuada');
let lista = document.querySelector('#tabuadaid');
let gerar = document.querySelector('#buttongerar');
let multiplos = document.querySelector('#mult');

function remover (){
    lista.innerHTML= '';
}
function tabuada(numero,mults){
    remover();
    
    for(var n=0; n<=mults.value;n++){
        var res = 0;
        res = numero.value * n;
        let item = document.createElement('option');
        item.text= `${numero.value} x ${n} = ${res}`;
        lista.appendChild(item);
    }
}
gerar.onclick = function(){
    tabuada(num,multiplos);
}

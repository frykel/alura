let num = document.querySelector('#ntabuada')
let lista = document.querySelector('#tabuadaid')
let gerar = document.querySelector('#buttongerar')
let apagar = document.querySelector('#buttonapagar')

function tabuada(numero){
    
    for(var n=0; n<11;n++){
        var res = 0;

        res = numero.value * n;
        let item = document.createElement('option');
        item.text= `${numero.value} x ${n} = ${res}`;
        lista.appendChild(item);

    }
}
function remover (){
    lista.innerHTML= '';
}


gerar.onclick = function(){
    tabuada(num);
}
apagar.onclick = function(){
    remover();
}
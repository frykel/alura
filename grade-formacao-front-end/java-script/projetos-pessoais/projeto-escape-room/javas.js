
let num = document.querySelector('.num');
let b = document.querySelector('.but');  
function secret(n){
    const meta = 111773.10;
    if (meta==n.value){
        alert('Você acertou, para continuar: --. .- ...- . - .- / -.. --- / . ... - .. .-.. .. ... - .-');
    }
    else{
        alert('Você errou! Tente novamente.');
        num.value ="";
        num.focus();
    }
}    

b.onclick=function(){
secret(num);  
 }
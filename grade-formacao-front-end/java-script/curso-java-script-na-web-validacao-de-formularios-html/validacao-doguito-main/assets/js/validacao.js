
const dataNascimento = document.querySelector('#nascimento');

dataNascimento.addEventListener('blur', (bb) =>{ 
    /*Adicionamos um evento que irá identificar (escutar) quando o usuário da página fizer uma ação, a ação em específico é 'blur', que é quando o campo do input em questão perder o foco. Aplicamos em seguida uma função anônima para implementar a função abaixo: */
    validaDataNascimento(bb.target);
})

function validaDataNascimento (input){

    const dataRecebida = new Date(input.value);
    let mensagem ='';

    if(!maiorQue18(dataRecebida)){ //o ! faz com que maiorQue18 atendendo a condição do if com falsa
        
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.';
    
    }
    
    input.setCustomValidity(mensagem);
}

function maiorQue18 (data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(),data.getUTCDate())
    
    return dataMais18 <= dataAtual
} 
const form = document.getElementById('novoItem');


form.addEventListener("submit",(evento)=>{
    evento.preventDefault(); //este comando previne que o formulário execute sua função programada original (enviar os dados para algum lugar, que neste caso seria
    //enviar para própria página e atualizar a mesma já que os dados ainda não tem destino)
    
    criaElemento(evento.target.elements['nome'].value,evento.target.elements['quantidade'].value)
})

function criaElemento(nome,quantidade){
    
    const novoItem = document.createElement('li');
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
    
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML = novoItem.innerHTML + nome;

    const lista = document.querySelector('#lista');

    lista.appendChild(novoItem);
    

}
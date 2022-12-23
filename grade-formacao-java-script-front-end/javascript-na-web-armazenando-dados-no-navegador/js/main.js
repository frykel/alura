const form = document.getElementById('novoItem');
const nome = document.getElementById('nome');
const itens = [];
nome.focus();

form.addEventListener("submit",(evento)=>{
    evento.preventDefault(); //este comando previne que o formulário execute sua função programada original (enviar os dados para algum lugar, que neste caso seria
    //enviar para própria página e atualizar a mesma já que os dados ainda não tem destino)
    const nom =evento.target.elements['nome']
    const quantidade=evento.target.elements['quantidade']

    criaElemento(nom.value,quantidade.value)

    nom.value = ""; //esvazia o campo de digitação após passar os dados para a função
    quantidade.value = "";
    nome.focus();
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
   /* O modo de armazenamento abaixo só armazena 1 informação por vez, sobrescrevendo as posteriores
    localStorage.setItem("nome",nome)
    localStorage.setItem("quantidade",quantidade)

    Então iremos usar um array de objetos para guardar múltiplas informações, conforme abaixo:
    */
   const itemAtual = {
    "nome": nome,
    "quantidade": quantidade
   }
   itens.push(itemAtual);
   localStorage.setItem("item",JSON.stringify(itens)) //JSON.stringify transforma o elemento em uma string (o localStorage só consegue ler coisas em string e não em objeto conforme estamos passando)

}
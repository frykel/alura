const form = document.getElementById('novoItem');
const nom = document.getElementById('nome');
const lista = document.querySelector('#lista');
/*Para que ao recarregar a página o nosso LocalStorage seja consultado e adicione os itens que já tiverem
sido adicionados iremos modificar o nosso array de objetos abaixo const itens = [], para que se ele identificar itens no LocalStorage ele já crie um array de objetos desses itens ao invés de um array vazio

Importante notificar que como os itens salvos no localStorage são strings, precisamos converter eles de volta
para que o JavaScript consiga manipula-los, fazemos isso com o comando JSON.parse()*/

const itens = JSON.parse(localStorage.getItem("itens")) || []; //está linha cria uma condicional com ||, em que ou um ou o outro irá ser executado

itens.forEach((elemento) =>{
criaElemento(elemento)
}
    
)


form.addEventListener("submit",(evento)=>{
    evento.preventDefault(); //este comando previne que o formulário execute sua função programada original (enviar os dados para algum lugar, que neste caso seria
    //enviar para própria página e atualizar a mesma já que os dados ainda não tem destino)
    const nome =evento.target.elements['nome']
    const quantidade=evento.target.elements['quantidade']
    /* O modo de armazenamento abaixo só armazena 1 informação por vez, sobrescrevendo as posteriores
    localStorage.setItem("nome",nome)
    localStorage.setItem("quantidade",quantidade)

    Então iremos usar um array de objetos para guardar múltiplas informações, conforme abaixo:
    */
    const existe = itens.find(elemento => elemento.nome === nome.value) //verifica se o item digitado já existe
    console.log(existe)
   const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value
   }

   if(existe){
    itemAtual.id = existe.id
    atualizaElemento(itemAtual)
    //itens[existe.id]=itemAtual
    itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
   }
   else{
    
    //itemAtual.id = itens.length
    itemAtual.id = itens[itens.length-1] ? (itens[itens.length-1]).id + 1 : 0;
    criaElemento(itemAtual)
   itens.push(itemAtual);

   }

   
   localStorage.setItem("itens",JSON.stringify(itens)) //JSON.stringify transforma o elemento em uma string (o localStorage só consegue ler coisas em string e não em objeto conforme estamos passando)
   
    

    nome.value = ""; //esvazia o campo de digitação após passar os dados para a função
    quantidade.value = "";
    nom.focus();
})

function criaElemento(item){
    
    const novoItem = document.createElement('li');
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.num = item.id //cria um data-attributes do tipo data-id dentro do strong
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML = novoItem.innerHTML + item.nome;
    novoItem.appendChild(botaoDeleta(item.id))
    
    const lista = document.querySelector('#lista');
    lista.appendChild(novoItem); 
    

}
function atualizaElemento (item){
    document.querySelector("[data-num='"+item.id+"']").innerHTML= item.quantidade   
}

function botaoDeleta (id){
    const elementoBotao = document.createElement("button")
    elementoBotao.classList.add('botao')
    elementoBotao.innerHTML = 'X'

    elementoBotao.addEventListener("click", function(){ /*Este event listener irá identificar qual dos botão de deleta (X) foi clicado*/
        deletaElemento(this.parentNode,id) /*o this irá dizer qual o elemento clicado e irá ser passado como parâmetro para uma função que irá deletar o elemento, que neste caso seria o próprio botao X clicado, como eu quero o "pai" dele, uso this.parentNode*/
    })

    return elementoBotao
}

function deletaElemento(tag,id){
    tag.remove() //remove a tag html passada como parâmetro

    itens.splice(itens.findIndex(elemento => elemento.id === id),1) //isso irá remover um item do array de objetos de acordo com seu id
    localStorage.setItem("itens",JSON.stringify(itens))
}

function aplicarDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro =>{
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
        /*O operador ... faz uma cópia do nosso array ou objeto e em sequência uso o comando para dar desconto no preço: preco: livro.preco - (livro.preco*desconto)*/
    })
    return livrosComDesconto
}
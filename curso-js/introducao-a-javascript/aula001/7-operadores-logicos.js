console.log(`Trabalhando com Operadores `)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`
idadeComprador = 25


const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de janeiro")
console.log("Destinos Possíveis:")
//console.log(salvador,saoPaulo,rioDeJaneiro)

console.log(listaDeDestinos)

if(idadeComprador>=18){
    console.log("Comprador Maior de Idade")
    listaDeDestinos.splice(1,1) //esse comando apaga itens do array, no caso (1,1) apaga a partir da segunda posição, um único elemento.
//posições: [0,1,2,3,4,5...]
}
else{
    console.log("Comprador não é maior de idade, venda proibida")
}

console.log(listaDeDestinos)
console.log(idadeComprador == 18) // igual a 18
console.log(idadeComprador > 18) //maior que 18
console.log(idadeComprador < 18) // menor que 18
console.log(idadeComprador >= 18) //maior ou igual a 18
console.log(idadeComprador <= 18) // menor ou igual a 18
console.log(idadeComprador != 18) // diferente de 18
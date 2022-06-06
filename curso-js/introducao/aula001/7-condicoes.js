console.log(`Trabalhando com Operadores `)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de janeiro")
console.log("Destinos Possíveis:")
//console.log(salvador,saoPaulo,rioDeJaneiro)

console.log(listaDeDestinos)
listaDeDestinos.push('Curitiba', 'Natal') //adiciona itens ao vetor (array) após já ter sido declarada
console.log(listaDeDestinos)

listaDeDestinos.splice(1,1) //esse comando apaga itens do array, no caso (1,1) apaga a partir da segunda posição, um único elemento.
//posições: [0,1,2,3,4,5...]

console.log(listaDeDestinos)
console.log(listaDeDestinos[1], listaDeDestinos[0]) //mostra a informação armazenada em uma posição específica.
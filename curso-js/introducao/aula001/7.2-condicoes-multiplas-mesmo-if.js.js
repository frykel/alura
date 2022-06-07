console.log(`Trabalhando com Condições em Sequência `)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`
idadeComprador = 19
estaAcompanhado = true

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de janeiro")
console.log("Destinos Possíveis:")
//console.log(salvador,saoPaulo,rioDeJaneiro)

console.log(listaDeDestinos)

if (idadeComprador >= 18 || estaAcompanhado) {
    console.log("Compra autorizada")
    listaDeDestinos.splice(1, 1) //esse comando apaga itens do array, no caso (1,1) apaga a partir da segunda posição, um único elemento.
    //posições: [0,1,2,3,4,5...]
}

else {
    console.log("Comprador não é maior de idade, venda proibida")
}


console.log(`Destinos restantes: ${listaDeDestinos}`)

console.log("Embarque: \n \n")

const temPassagemComprada = true
if(idadeComprador>=18 && temPassagemComprada){
    console.log("Boa Viagem")
}
else{
    console.log("Você não pode embarcar")
}

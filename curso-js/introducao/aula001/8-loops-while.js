console.log(`Trabalhando com Condições em Sequência `)

const idadeComprador = 16
const estaAcompanhado = false
let temPassagemComprada = false
const destino = "São Paulo"

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro")
console.log("Destinos Possíveis:")


console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true

console.log(podeComprar)
console.log(`Destinos restantes: ${listaDeDestinos}`)

console.log("Embarque: \n \n")

let contador = 0
while(contador<3){
    if(listaDeDestinos[contador]== destino){
        console.log(`O destino escolhido, ${listaDeDestinos[contador]}, está disponível`)
        break
    }
    else{
        console.log("Não é o destino escolhido ou não está disponível")
    }
    contador++ //ou contador+=1
}
if(idadeComprador>=18 && temPassagemComprada){
    console.log("Boa Viagem")
}
else{
    console.log("Você não pode embarcar")
}


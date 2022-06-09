console.log(`Trabalhando com Condições em Sequência `)

const idadeComprador = 19
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


let destinoExiste = false
for(let contador = 0; contador<3; contador++){
    if(listaDeDestinos[contador]== destino){
        console.log("Destino escolhido existe: ",listaDeDestinos[contador])
        destinoExiste=true
        break
    }
    
    contador++ //ou contador+=1
}
if(podeComprar && destinoExiste){
    console.log("Boa Viagem")
}
else{
    console.log("Você não pode embarcar")
}


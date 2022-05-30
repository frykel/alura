console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
let nome = "Ricardo";
const sobrenome = "Bugan"; 

console.log(nome +" "+sobrenome);
console.log(nome,sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`)
//nome = nome + sobrenome  como a variável nome foi declarada como const, ela não pode ser alterada, portanto isso dá erro, se alterarmos para let, a alteração é possível
nome = nome+" "+sobrenome

console.log(`Novo nome: ${nome}`)

let altura //declaração de variável
altura=1.71 //atribuição de valor a variável
altura+=0.5;
console.log(altura)
let cont=0
for(let i=0;altura<10;i++){
    altura+=1
    cont=i
}
console.log(`Altura final: ${altura}, contador final ${cont}`)
//para não termos que declarar tipos de variáveis que se repetem, utilizaremos uma classe para armazena-las

class Cliente{
    nome //atributos
    cpf //atributos
   
}
class ContaCorrente{
    agencia //atributos
    #saldo = 0 //a # antes do atributo saldo serve para indicar que ele é privado e nada, a não ser outro atributo dessa classe pode alterar seu valor. 
    //Esse conceito de atributo privado com # ainda está em fase de implementação, dessa forma não é oficial, a convenção é de que se use _ em vez de # para indicar atributo privado. Neste exemplo foi utilizado o #.

    sacar(valor){ //método ou função

        if(this.#saldo>=valor){ //não seria correto colocar contaCorrenteRicardo.saldo pois ele seria específico a um objeto, neste caso usamos this para se referir a qualquer conta corrente.
        
            this.#saldo -= valor // contaCorrenteRicardo.saldo = contaCorrenteRicardo.saldo-valorSacado
            console.log(this.#saldo)
        }
    }

    depositar(valor){
        if(valor>0){
            this.#saldo+=valor
            console.log(this.#saldo)
        }

    }
}

const cliente1 = new Cliente()

 cliente1.nome = "Ricardo";
 cliente1.cpf = 11122233309;


const cliente2 = new Cliente()

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente()


contaCorrenteRicardo.agencia=1001



contaCorrenteRicardo.sacar(100)
contaCorrenteRicardo.depositar(500)
contaCorrenteRicardo.sacar(200)

console.log(cliente1)
console.log(cliente2)
import { Cliente } from "./Cliente.js"

export class ContaCorrente{
    agencia //atributos
    //#saldo = 0 //a # antes do atributo saldo serve para indicar que ele é privado e nada, a não ser outro atributo dessa classe pode alterar seu valor. 
    //Esse conceito de atributo privado com # ainda está em fase de implementação, dessa forma não é oficial, a convenção é de que se use _ em vez de # para indicar atributo privado. Neste exemplo foi utilizado o #.
    
    _cliente // Assim como foi feito em saldo para evitar uma atribuição errada ao cliente (no caso os valore cliente.cpf e cliente.nome) por exemplo cliente=0, transformaremos ele em um atributo privado que poderá ser alterado através de setters e getters (chamados de acessores)
    
    //Setters (set/atribuição) e getters (get/chamado ou pegar) possuem estrutura muito parecida com funções (métodos), eles são usados também como forma de proteção dos atributos da nossa classe (encapsulamento), veja abaixo:
    

    set cliente(novoValor){ //perceba que o _cliente não foi usado na declaração, pois ele vai se referenciar na chamada do setter (conta2.cliente por exemplo)
        //Só usar o setter não garante que eu atribua o valor errado ao meu cliente (conta2.cliente = 0 por exemplo), para isso iremos fazer uma condição em que ele só possa ser atribuido se o valor passado for uma instância de Cliente (Puxar a classe do arquivo Cliente.js)
       if(novoValor instanceof Cliente){
        this._cliente=novoValor
       }
    }
    get cliente(){ // o get é usado para retorno do valor do cliente quando solicitado por console.log por exemplo
        return this._cliente
    }
    
    
    _saldo=0 //convenção usada ( _ ) para indicar atributo privado
    //no caso do saldo podemos usar um getter somente par consultar o saldo atual, já que seu valor já é alterável pelos métodos sacar, depositar e transferir

    get saldo(){
        return this._saldo
    }

    sacar(valor){ //método ou função

        if(this._saldo>=valor){ //não seria correto colocar contaCorrenteRicardo.saldo pois ele seria específico a um objeto, neste caso usamos this para se referir a qualquer conta corrente.
        
            this._saldo -= valor // contaCorrenteRicardo.saldo = contaCorrenteRicardo.saldo-valorSacado
            return valor
        }
    }

    depositar(valor){
        if(valor>0){
            this._saldo+=valor
            
        }
        /*alternativa do if acima poderia ser feito com early return
        if(valor<=0){
            return
        }
        this._saldo+=valor
        */

    }
    transferir(valor,conta){

        const ValorSacado = this.sacar(valor)
        conta.depositar(ValorSacado)
//No JavaScript é possível alterar um objeto usando um método(função)
// por exemplo se eu colocasse um comando conta.cidade = "São Paulo", ele iria aparecer no console.log da conta corrente que chamou a função (método) transferir
//Mas para tipos de valores primitivos do JavaScript (String, boleanos, numeros...) isso não é possível,
//por exemplo se eu colocar valor = 10, esse valor não seria aplicado a variável original que foi importado do chamamento da função, pois nesse caso só é passado uma cópia do valor e não a variável em si.

//via de regra no JS, variáveis do tipo primitivo (Strings, Boleanos, Números inteiros, null, undefined, symbol ...) são passados sempre como valor (cópia do original), já os demais tipos como: Objetos, Arrays ... são passados como referência e podem ser alterados dentro de funções ou métodos

    }
}
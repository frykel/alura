export class ContaCorrente{
    agencia //atributos
    //#saldo = 0 //a # antes do atributo saldo serve para indicar que ele é privado e nada, a não ser outro atributo dessa classe pode alterar seu valor. 
    //Esse conceito de atributo privado com # ainda está em fase de implementação, dessa forma não é oficial, a convenção é de que se use _ em vez de # para indicar atributo privado. Neste exemplo foi utilizado o #.
    cliente
    
    
    _saldo=0 //convenção usada ( _ ) para indicar atributo privado

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
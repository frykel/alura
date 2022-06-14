export class ContaCorrente{
    agencia //atributos
    //#saldo = 0 //a # antes do atributo saldo serve para indicar que ele é privado e nada, a não ser outro atributo dessa classe pode alterar seu valor. 
    //Esse conceito de atributo privado com # ainda está em fase de implementação, dessa forma não é oficial, a convenção é de que se use _ em vez de # para indicar atributo privado. Neste exemplo foi utilizado o #.
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
}
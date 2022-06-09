//para não termos que declarar tipos de variáveis que se repetem, utilizaremos uma classe para armazena-las

class Cliente{
    nome //atributos
    cpf //atributos
    agencia //atributos
    saldo //atributos
}

const cliente1 = new Cliente()

 cliente1.nome = "Ricardo";
 cliente1.cpf = 11122233309;
 cliente1.agencia = 1001;
 cliente1.saldo = 0;

const cliente2 = new Cliente()

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1,cliente2)
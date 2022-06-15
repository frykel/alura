//para não termos que declarar tipos de variáveis que se repetem, utilizaremos uma classe para armazena-las (ver arquivo: Cliente.js e ContaCorrente.js)

/*Para importar módulos de classes no js devemos criar um arquivo package.json indicando que o arquivo index.js também é um módulo, senão o VSC tentará executa-lo como script e não irá puxar os imports

Para isso iremos ao terminal do VSC e digitar "npm init" --> NPM (Node Packager Manager) e preencher as informações necessárias para cirar package.json

Depois disso devemos digitar dentro do arquivo package.json "type" : "module" para que ele entenda que index.js também é módulo
*/
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente()

 cliente1.nome = "Ricardo";
 cliente1.cpf = 11122233309;


//const cliente2 = new Cliente()

//cliente2.nome = "Alice";
//cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente()


contaCorrenteRicardo.agencia=1001
contaCorrenteRicardo.cliente= cliente1


contaCorrenteRicardo.sacar(100)
contaCorrenteRicardo.depositar(500)





const conta2= new ContaCorrente()
conta2.cliente = new Cliente()
//posso atribuir a conta2.cliente = null, isso faz com que eu diga a minha memoria para armazenar nada lá (null)
//se eu não atribuir nada a conta2.cliente ele vai atribuir undefined.
conta2.cliente.nome = "Alice"
conta2.cliente.cpf= 88822233309
conta2.agencia= 1020

conta2.depositar(600)



conta2.transferir(100,contaCorrenteRicardo)

console.log(contaCorrenteRicardo,conta2)
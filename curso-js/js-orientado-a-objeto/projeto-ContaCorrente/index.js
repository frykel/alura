//para não termos que declarar tipos de variáveis que se repetem, utilizaremos uma classe para armazena-las (ver arquivo: Cliente.js e ContaCorrente.js)

/*Para importar módulos de classes no js devemos criar um arquivo package.json indicando que o arquivo index.js também é um módulo, senão o VSC tentará executa-lo como script e não irá puxar os imports

Para isso iremos ao terminal do VSC e digitar "npm init" --> NPM (Node Packager Manager) e preencher as informações necessárias para cirar package.json

Depois disso devemos digitar dentro do arquivo package.json "type" : "module" para que ele entenda que index.js também é módulo
*/
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo",11122233309) //iremos usar o constructor para passar o nome e cpf por parâmetros
const cliente2 = new Cliente("Alice",88822233309)
/*Como usaremos constructor para declarar meus valores de nome e cpf, não mais precisaremos da declaração abaixo:
 cliente1.nome = "Ricardo";
 cliente1.cpf = 11122233309;
 */


//const cliente2 = new Cliente()

//cliente2.nome = "Alice";
//cliente2.cpf = 88822233309;

const conta1 = new ContaCorrente(1001,cliente1)
const conta2= new ContaCorrente(1020,cliente2)
//conta1.agencia=1001 foi passado como parâmetro do constructor acima
//conta1.cliente=cliente1 foi passado como parâmetro do constructor acima
conta1.depositar(500)

//posso atribuir a conta2.cliente = null, isso faz com que eu diga a minha memoria para armazenar nada lá (null)
//se eu não atribuir nada a conta2.cliente ele vai atribuir undefined.

//Como usaremos constructor para declarar meus valores de nome e cpf, não mais precisaremos da declaração abaixo:
//cliente2.nome = "Alice" foi passado como parâmetro do constructor acima (new Cliente)
//cliente2.cpf= 88822233309 foi passado como parâmetro do constructor acima (new Cliente)

//conta2.agencia= 1020 foi passado como parâmetro do constructor acima (new ContaCorrente)

conta2.depositar(600)

conta2.transferir(200,conta1)

console.log(conta1)
console.log(conta2)
console.log(ContaCorrente.numeroDeContas)
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


const cliente2 = new Cliente()

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente()


contaCorrenteRicardo.agencia=1001



contaCorrenteRicardo.sacar(100)
contaCorrenteRicardo.depositar(500)
const valorSacado = contaCorrenteRicardo.sacar(200)

console.log(cliente1)
console.log(valorSacado)

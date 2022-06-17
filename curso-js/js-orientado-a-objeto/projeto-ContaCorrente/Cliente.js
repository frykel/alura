export class Cliente{ // comando export serve para exportar a class cliente que será usada na página principal
    nome //atributos
    _cpf //atributos

    //como o cpf também é um atributo que não deverá ser modificado depois de atribuido inicialmente, transformaremos em um atributo privado
    //diferentemente dos setters (onde criamos um mecanismo que pode mudar sua atribuição sempre que a função for chamada) criaremos um constructor, que nesse caso só irá modificar meu atributo quando a classe Cliente for criada:
    get cpf(){
        return this._cpf
    }

    constructor(nome,cpf){
        this._cpf = cpf
        this.nome=nome  
    }
   
}
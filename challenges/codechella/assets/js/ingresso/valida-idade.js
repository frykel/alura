export default function ehMaiorDeIdade(campo){
    const dataDeNascimento = new Date(campo.value)
    if(!validaIdade(dataDeNascimento)){
        campo.setCustomValidity("O usuário não é maior de idade")
    }
}

function validaIdade(data){
    const dataAtual = new Date()
    const dataMais16 = new Date(data.getUTCFullYear() + 16, data.getUTCMonth(), data.getUTCDate())

    return dataAtual >= dataMais16
}
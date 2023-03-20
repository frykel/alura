import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = ["","Programação","Front-End","Data Science","Devops","UX e Design","Mobile","Inovação e Gestão"]
const aoSalvar = (evento) =>{
    evento.preventDefault()
    
    console.log("Salvado com sucesso")
    
}
    return (

        <section className='formulario-container'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio = "true" label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto obrigatorio = "true" label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto obrigatorio = "true" label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa label = "Times:" itens ={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )   
}

export default Formulario
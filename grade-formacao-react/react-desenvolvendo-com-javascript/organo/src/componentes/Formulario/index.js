import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

const Formulario = () => {
    const times = ["","Programação","Front-End","Data Science","Devops","UX e Design","Mobile","Inovação e Gestão"]
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    /*No r*/
const aoSalvar = (evento) =>{
    evento.preventDefault()
    
    console.log("Salvado com sucesso",nome,cargo,imagem)
    
}
    return (

        <section className='formulario-container'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto valor = {nome} aoAlterado ={valor => setNome(valor)} obrigatorio = "true" label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto valor = {cargo} aoAlterado ={valor => setCargo(valor)} obrigatorio = "true" label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto valor = {imagem} aoAlterado ={valor => setImagem(valor)} obrigatorio = "true" label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa label = "Times:" itens ={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )   
}

export default Formulario
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {
    const times = ["","Programação","Front-End","Data Science","Devops","UX e Design","Mobile","Inovação e Gestão"]
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    /*Os setAlgumacoisa também são chamados de Hooks no React, conforme a sintaxe acima. Para que a renderização aconteça da forma como queremos devemos usar o useState no formulário.*/
    /*No r*/
const aoSalvar = (evento) =>{
    evento.preventDefault()
    
    props.aoColaboradorCadastrado( {
        nome: nome, // ou {nome, cargo, imagem, time}
        cargo: cargo,
        imagem: imagem,
        time: time
    } )
    
}
    return (

        <section className='formulario-container'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto valor = {nome} aoAlterado ={valor => setNome(valor)} obrigatorio = "true" label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto valor = {cargo} aoAlterado ={valor => setCargo(valor)} obrigatorio = "true" label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto valor = {imagem} aoAlterado ={valor => setImagem(valor)} obrigatorio = "true" label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa valor = {time} aoAlterado = {valor => setTime(valor)} label = "Times:" itens ={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )   
}

export default Formulario
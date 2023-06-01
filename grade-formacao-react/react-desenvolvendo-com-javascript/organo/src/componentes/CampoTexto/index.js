import { useState } from 'react'
import './CampoTexto.css'
const CampoTexto = (props) =>{
     /*O props é o nome "padrão" utilizado por Devs para o parâmetro do componente. Significa propriedades.
     Mas claro que qualquer outro nome poderia ser utilizado*/ 
     //let valor = "Silvio"
     const placeholderModificada = `${props.placeholder}...`
      //const [valor, setValor] = useState('')
     const aoDigitado = (evento) =>{
         props.aoAlterado(evento.target.value)
     }
    return(
       <div className="campo-texto">
       <label>{props.label}</label>
       <input value = {props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
       </div>
    )
}

export default CampoTexto
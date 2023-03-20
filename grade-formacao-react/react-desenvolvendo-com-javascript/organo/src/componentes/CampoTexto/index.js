import './CampoTexto.css'
const CampoTexto = (props) =>{
     /*O props é o nome "padrão" utilizado por Devs para o parâmetro do componente. Significa propriedades.
     Mas claro que qualquer outro nome poderia ser utilizado*/ 
     let valor = ""
     const placeholderModificada = `${props.placeholder}...`
     const aoDigitado = (evento) =>{
      valor = evento.target.value
         console.log(valor)
     }
    return(
       <div className="campo-texto">
       <label>{props.label}</label>
       <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
       </div>
    )
}

export default CampoTexto
import './CampoTexto.css'
const CampoTexto = (props) =>{
     /*O props é o nome "padrão" utilizado por Devs para o parâmetro do componente. Significa propriedades.
     Mas claro que qualquer outro nome poderia ser utilizado*/ 

     const placeholderModificada = `${props.placeholder}...`
    return(
       <div className="campo-texto">
       <label>{props.label}</label>
       <input placeholder={placeholderModificada}></input>
       </div>
    )
}

export default CampoTexto
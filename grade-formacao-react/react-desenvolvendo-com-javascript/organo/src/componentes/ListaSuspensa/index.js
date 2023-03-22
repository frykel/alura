import './ListaSuspensa.css'
const ListaSuspensa = (props) => {
    return(
        <div> 
        <label className='titulo'>{props.label}</label>     
        <select className="caixa-selecao" onChange={evento => props.aoAlterado(evento.target.value)} required = {props.required} value = {props.value}>
            {props.itens.map(item => <option key ={item}>{item}</option>)}
            {/*A linha acima pode ser reescrita também como:
            <select className="caixa-selecao">
            {props.itens.map(item => {
                return <option>{item}</option>})}*/}
        </select>
        </div> 
    )
}

export default ListaSuspensa
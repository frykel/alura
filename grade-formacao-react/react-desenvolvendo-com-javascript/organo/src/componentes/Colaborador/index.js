import './Colaborador.css'

const Colaborador = (props) =>{// pode ser escrito como parâmetro de função JS: Time = ({nome,cargo,imagem}), ai neste caso se elimina a necessidade de escrever props
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src = {props.imagem} alt = {props.imagem}/>{/*src={imagem} por exemplo*/}
                
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador
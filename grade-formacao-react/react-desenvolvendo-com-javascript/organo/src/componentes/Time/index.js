import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
return(
    <section className='time' style={{backgroundColor: props.corSec}}>
        <h3 style={{borderColor: props.corPrim}}>{props.nome}</h3>

        <div className='card'>
            {props.colaboradores.map(colaborador => <Colaborador nome = {colaborador.nome} cargo = {colaborador.cargo} imagem = {props.imagem}/>)}
        </div>
    </section>

)
}

export default Time
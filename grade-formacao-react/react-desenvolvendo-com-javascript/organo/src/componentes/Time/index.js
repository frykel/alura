import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
return(
    (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: props.corSec}}>
        <h3 style={{borderColor: props.corPrim}}>{props.nome}</h3>

        <div className='card'>
            {props.colaboradores.map(colaborador => <Colaborador corDeFundo = {props.corPrim} key = {colaborador.nome} nome = {colaborador.nome} cargo = {colaborador.cargo} imagem = {colaborador.imagem}/>)}
        </div>
    </section>
    /*O comando (props.colaboradores.length > 0) && acima serve como um if ou seja um elemento condicionado, onde se props.colaboradores.length > 0 for true ele irá executar o código a direita do &&.
    
    Podemos também trocar a sintaxe && por um operador ternário ficando:

    (props.colaboradores.length > 0) ? <section className='time' style={{backgroundColor: props.corSec}}>
        <h3 style={{borderColor: props.corPrim}}>{props.nome}</h3>

        <div className='card'>
            {props.colaboradores.map(colaborador => <Colaborador nome = {colaborador.nome} cargo = {colaborador.cargo} imagem = {props.imagem}/>)}
        </div>
    </section> : ''
    */

)
}

export default Time
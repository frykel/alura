import './Time.css'

const Time = (props) => {
return(
    <section className='time' style={{backgroundColor: props.corSec}}>
        <h3 style={{borderColor: props.corPrim}}>{props.nome}</h3>
    </section>

)
}

export default Time
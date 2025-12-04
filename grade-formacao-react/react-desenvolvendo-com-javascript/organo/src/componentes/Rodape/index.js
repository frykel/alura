import './Rodape.css'

const Rodape = () => {

    return (
        <footer className='rodape'>
            <div className='redes__sociais'>
                <img src = "/imagens/fb.png" alt = "Logo Facebook"/>
                <img src = "/imagens/tw.png" alt = "Logo Twitter"/>
                <img src = "/imagens/ig.png" alt = "Logo Instagram"/>

            </div>
            <div className='logo'>
                <img src = "/imagens/logo.png" alt = "Logo Organo"/>
            </div>
            <div className='texto'>
                <p>Desenvolvido por Alura.</p>
            </div>


        </footer>
    )
}

export default Rodape
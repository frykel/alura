import "./Rodape.css"

const Rodape = () => {

    return(
        <footer className="rodape">
            <div className="redes__sociais">
                <a href ="www.facebook.com.br"><img src = "/imagens/fb.png" alt = "Logo Facebook"/></a>
                <a href ="www.twitter.com.br"><img src = "/imagens/tw.png" alt = "Logo Twitter"/></a>
                <a href ="www.instagram.com.br"><img src = "/imagens/ig.png" alt = "Logo Instagram"/></a>
            </div>
            <div className="logo">
                <img src = "/imagens/logo.png" alt = "Logo do Organo"/>

            </div>
            <div className="texto">
                <p>Desenvolvido pela Alura</p>
            </div>
        </footer>

    )

}

export default Rodape
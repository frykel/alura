import './Banner.css'
/*
function Banner() {
    //JSX
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="Banner Principal da páginado Organo"/>
        </header>
    )

}

export default Banner

Ao inves de exportar como acimar, eu posso também fazer conforme abaixo:
*/

export const Banner = () =>{
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="Banner Principal da páginado Organo"/>
        </header>
    )
}
/*o código acima foi exportado para um arquivo index.js na mesma pasta e de lá foi export default para o arquivo principal */
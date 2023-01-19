import './Banner.css'

function Banner() {
    return (
        <header className="banner">
            <img src="/images/banner.jpeg" alt="banner tenis jordan"/>
            <div className="titulo">
                <h1 >A melhor loja de Jordan</h1>
            </div>
            <div className="descricao">
                <p >O tênis Jordan é fruto de uma velha parceria entre a Nike e o jogador Michael Jordan.</p>
            </div>
        </header>
    )   
}

export default Banner
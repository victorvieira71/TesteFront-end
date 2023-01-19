import './Produtos.css'

function Produtos () {
    return (
    <main>
        <div className="destaque">
            <h1>Destaques</h1>
        </div>
        <div className="frete">
            <p>Frete Grátis e chinelo de brinde é aqui, aproveite por tempo limitado</p>
        </div>
        <section className='produtos'>
            <article className="tenis">
                <img src='/images/produto-1.png' />
            </article>
            <article className="tenis">
                <img src='/images/produto-2.png' />
            </article>
            <article className="tenis">
                <img src='/images/produto-3.png' />
            </article>
            <article className="tenis">
                <img src='/images/produto-4.png' />
            </article>
            <article className="tenis">
                <img src='/images/produto-5.png' />
            </article>
            <article className="tenis">
                <img src='/images/produto-6.png' />
            </article>
            <article className="tenis">
                <img src='/images/produto-7.png' />
            </article>
            <article className="tenis">
                <img src='/images/produto-8.png' />
            </article>
        </section>
    </main>

    )
}

export default Produtos
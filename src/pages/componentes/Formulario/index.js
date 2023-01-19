import './Formulario.css'
import {Link, withRouter} from "react-router-dom"


    function Formulario () {
    return (
        <section className="formulario">
            <p>Bem vindo de volta</p>
            <h1>Faça Login na sua conta</h1>
                <form>
                   <label for="email">E-mail</label>
			       <input type="text" id="email" className='input-padrao' required placeholder="codelandia@gmail.com" />
                   <label for="email">Senha</label>
			       <input type="password" id="senha" className='input-padrao' required placeholder="Senha" />
                   <label className="checkbox"><input type="checkbox" />Lembre de mim</label>
                   <p className='troca-senha'>Esqueceu sua senha?</p>
                   
                   <button className="botao">
                        Entrar
                    </button>

                    <button className="botao2">
                        <img src="./images/google.png" />   Ou faça login com o google
                    </button>

                    <Link to="/"><button className="link">
                        Voltar ao site
                    </button></Link>

                    <p className='cadastro'>Não tem uma conta?</p> <p className='cadastro-cor'>Cadastre-se</p>
            
                </form>
        </section>
         )
}

export default Formulario
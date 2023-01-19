import './Navbar.css'
import {Link, withRouter} from "react-router-dom"

function Navbar () {
    return (
        <nav>
            <div className='desconto'>
                <p>Ganhe R$10,00 de desconto no frete</p>
                <Link className='linkl' to="/Login">Login</Link>
            </div>
            <div className='nome'>
                <h1>JordanShoes</h1>
            </div>
        </nav>
    )
}

export default Navbar
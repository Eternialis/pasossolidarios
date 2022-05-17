import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <h1>Pasos Solidarios</h1>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/nosotros">NOSOTROS</Link>
                </li>
                <li>
                    <Link to="/sumate">SUMATE</Link>
                </li>
                <li>
                    <Link to="/dona">DONA</Link>
                </li>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
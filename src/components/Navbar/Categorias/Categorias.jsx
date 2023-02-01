//Uso este import para los Link de react, reemplazo los <a> por <Link>
import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <div>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" id="themes">Categorias</a>
                <div className="dropdown-menu" aria-labelledby="themes">
                    <Link className="dropdown-item" to={"/category/1"}>Notebooks</Link>
                    {/*<div className="dropdown-divider" /> */}
                    <Link className="dropdown-item" to={"/category/2"}>Celulares</Link>
                    <Link className="dropdown-item" to={"/category/3"}>Smart TV</Link>
                    <Link className="dropdown-item" to={"/category/4"}>Desktop PC</Link>
                    <Link className="dropdown-item" to={"/category/5"}>Consolas</Link>
                </div>
            </li>
        </div>
    );
}

export default Categorias;

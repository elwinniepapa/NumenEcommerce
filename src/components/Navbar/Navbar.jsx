import CartButton from "./CartButton/CartButton";
import Secciones from "./Secciones/Secciones";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary marginDown">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>                
                <Link className="navbar-brand" to={"/"}>Tienda Online</Link>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <Secciones />
                </div>
                <CartButton />
            </div>
        </nav>
    );
}

export default Navbar;

//fixed-top
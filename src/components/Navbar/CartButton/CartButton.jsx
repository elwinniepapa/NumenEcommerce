import { useCarritoContext } from "../../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartButton = () => {

    const { getProductsQuantity } = useCarritoContext()

    return (
        <div>
            <span className="span-white">{getProductsQuantity()} </span>
            <button className="btn btn-dark">
                <Link to={"/cart"} className="nav-link">
                    Carrito
                </Link>
            </button>            
        </div>
    );
}

export default CartButton;

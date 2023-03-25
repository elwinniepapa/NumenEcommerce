import { useCarritoContext } from "../../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartButton = () => {

    const { getProductsQuantity } = useCarritoContext()

    return (
        <div>
            <span className="text-success">({getProductsQuantity()} productos) </span>
            <button className="btn btn-info">
                <Link to={"/cart"} className="nav-link">
                    Carrito
                </Link>
            </button>            
        </div>
    );
}

export default CartButton;

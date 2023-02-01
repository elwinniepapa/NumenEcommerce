import { useCarritoContext } from "../../../context/CarritoContext";

const CartButton = () => {

    const { getProductsQuantity } = useCarritoContext()

    return (
        <div>
            <button className="btn btn-dark">Carrito</button>
            <span>{ getProductsQuantity() }</span>
        </div>
    );
}

export default CartButton;

import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";

const Cart = () => {

    const { carrito, emptyCart, totalPrice, removeItem } = useCarritoContext()

    return (
        <div>
            {carrito.length === 0
                ? /* Ternario que significa SI */
                <div>
                    <h1>Carrito vacío</h1>
                    <button className="btn btn-dark">
                        <Link to={"/"} className="nav-link">
                            Ir al inicio
                        </Link>
                    </button>
                </div>
                : /* Ternario que significa NO */
                <div>
                    {/* crear un container*/}
                    <div className="container">
                        <div className="row centerProducts">

                            {carrito.map(prod =>
                                <div className="card col-xl-2">
                                    <div className="card-img">
                                        <img src={prod.img} className="card-img-top productImage" alt={prod.alt} />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{prod.nombre} {prod.marca} {prod.modelo}</p>
                                        <p className="card-text">Cantidad: {prod.cant}</p>
                                        <p className="card-text">Precio unitario: $ {prod.precio}</p>
                                        <p className="card-text">Subtotal: $ {(prod.precio * prod.cant)}</p>
                                        <button className="btn btn-danger fontNoto" onClick={() => removeItem(prod.id)}>Eliminar</button>
                                    </div>
                                </div>
                            )}                            

                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Cart;

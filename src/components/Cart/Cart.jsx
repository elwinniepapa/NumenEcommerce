import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";

const Cart = () => {

    const { carrito, emptyCart, totalPrice, removeItem } = useCarritoContext()

    return (
        <div>
            {carrito.length === 0
                ? /* Ternario que significa SI */
                <div className="container">
                    <div className="row justify-content-center marginDown">                        
                        <div className="col-md-auto">
                            <h2>Carrito vacío</h2>
                        </div>                        
                    </div>
                    <div className="row justify-content-center marginDown">
                        <div className="col-md-auto">
                            <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-52c12.appspot.com/o/emptycart.png?alt=media&token=c41b1bc0-aa79-4e57-b836-2c16d34e4b97" alt="carrito_vacio" />
                        </div>
                    </div>
                    <div className="row justify-content-center marginDown">
                        <div className="col-md-auto">
                            <button className="btn btn-info">
                                <Link to={"/"} className="nav-link">
                                    Explorar ofertas
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                : /* Ternario que significa NO */
                <div>
                    {/* crear un container*/}
                    <div className="container">
                        <div className="row centerProducts">

                            {carrito.map(prod =>
                                <div className="card col-xl-2" key={prod.id}>
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

                            <div className="marginDown"></div>

                            <div className="row centerProducts marginDown">
                                <div className="col col-xl-auto">
                                    <h4>Monto total de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</h4>
                                </div>
                            </div>

                            <div className="row centerProducts">
                                <div className="col-xl-2 flex-center">
                                    <button className="btn btn-danger fontNoto" onClick={emptyCart}>Vaciar carrito</button>
                                </div>
                                <div className="col-xl-2 flex-center">
                                    <button className="btn btn-info fontNoto"><Link className="nav-link" to={"/"}>Continuar comprando</Link></button>
                                </div>
                                <div className="col-xl-2 flex-center">
                                    <button className="btn btn-success fontNoto"><Link className="nav-link" to={"/checkout"}>Finalizar compra</Link></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </div >
    );
}

export default Cart;

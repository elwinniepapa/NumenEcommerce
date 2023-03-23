//para tener referencia a un formulario
import { useRef } from "react";
import { useCarritoContext } from "../../context/CarritoContext";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { updateProduct, getProduct } from "../../assets/firebase";

const Checkout = () => {

    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    const formData = useRef()
    let navigate = useNavigate() //referencio a la ruta donde estoy
    const consultForm = (e) => {
        e.preventDefault()
        //Consulto datos del form y lo convierto a Objeto
        const formDat = new FormData(formData.current)
        const clientData = Object.fromEntries(formDat)
        //Descuento stock        
        const aux = [...carrito]
        aux.forEach(prod => {
            getProduct(prod.id).then(prodBDD => {
                prodBDD.stock -= prod.cant
                updateProduct(prod.id, prodBDD)
            })
        })
        //Compra finalizada
        toast.success(`Hola ${clientData.fullName}, su compra por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} ha sido realizada con éxito`)
        emptyCart()
        e.target.reset() //limpio el formulario        
        navigate("/")        
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center">
                    <form onSubmit={consultForm} ref={formData}> {/* Con esta referencia guardo el valor del formulario porque ya fue renderizado */}
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" name="fullName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">DNI</label>
                            <input type="number" className="form-control" name="dni" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cellphone" className="form-label">Celular</label>
                            <input type="number" className="form-control" name="cellphone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direction" className="form-label">Dirección</label>
                            <input type="text" className="form-control" name="direction" />
                        </div>
                        <button type="submit" className="btn btn-primary">Finalizar compra</button>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Checkout;

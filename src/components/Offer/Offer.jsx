//Componente molde de las Ofertas
import { Link } from "react-router-dom";

const Offer = ({ prod }) => {
    return (        
        <div className="card col-xl-2">            
            <div className="card-img">
                <img src={prod.img} className="card-img-top productImage" alt={prod.alt} />
            </div>
            <div className="card-body">
                <p className="card-text">{prod.nombre} {prod.marca} {prod.modelo}</p>
                <p className="card-text">$ {prod.precio}</p>
                <button className="btn btn-primary fontNoto"><Link className="nav-link" to={`/product/${prod.id}`}>Ver producto</Link></button>                
            </div>
        </div>
    );
}

export default Offer;
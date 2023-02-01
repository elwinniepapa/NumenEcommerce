import {useState} from "react";

const Contador = ({stock, onAdd}) => {
    
    const [cont, setCont] = useState(1)

    const disCont = () => cont > 1 && setCont(cont - 1)
    const aumCont = () => cont < stock && setCont(cont + 1)
    const agregarAlCarrito = () => onAdd(cont)


    return (
        <div>
            <button onClick={() => disCont()} className="btn btn-dark">-</button>
            <p>{cont}</p>
            <button onClick={() => aumCont()} className="btn btn-light">+</button>
            <button onClick={() => agregarAlCarrito()} className="btn btn-light">Agregar al carrito</button>
        </div>
    );
}

export default Contador;

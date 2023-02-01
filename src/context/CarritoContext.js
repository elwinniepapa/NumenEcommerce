//variable global carrito, fuera de los componentes

//usar context, crear context, y pasar un estado con los valores
import { useContext, createContext, useState } from "react";
import ProductListGenerator from "../components/ProductListGenerator/ProductListGenerator";

//creo el contexto
const CarritoContext = createContext();

//ofrezco una funcion para utilizar el contexto
export const useCarritoContext = () => useContext(CarritoContext);

//implemento el contexto
export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    const isInCart = (id) => {
        return carrito.find(product => product.id === id);
    }

    const addProduct = (product, amount) => {
        if (isInCart(product.id)) {
            const index = carrito.findIndex(prod => prod.id === product.id);
            const aux = [...carrito]
            aux[index].cant = amount; //cant x amount
            setCarrito(aux);
        }
        else {
            const newProduct = {
                ...product, //operador spread, hace copias de objetos
                cant: amount
            }
            //equivale al push
            setCarrito([...carrito, newProduct])
        }
    }

    const emptyCart = () => {
        setCarrito([]); //seteo un array vacio
    }

    const removeItem = (id) => {
        setCarrito(carrito.filter(product => product.id != id))
        //devuelve todos los item con id distinto de id
    }

    const getProductsQuantity = () => {        
        return carrito.reduce((acum, prod) => acum += prod.cant, 0) //cant x amount
        //recorro todo el carrito y acumulo la suma en acum
    }

    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.price * prod.amount), 0)
    }
    
    return(
        <CarritoContext.Provider value={{carrito, isInCart, addProduct, emptyCart, removeItem, getProductsQuantity, totalPrice}}>
            {props.children}
        </CarritoContext.Provider>
    )
}
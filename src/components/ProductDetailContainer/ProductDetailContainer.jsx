//componente que consulta BDD y muestra un producto en return
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductDetailContainer = () => {

    const [product, setProduct] = useState([]); //valor inicial es un array []
    const { id } = useParams(); //el parametro ingresa siempre como string

    useEffect(() => {
        fetch('../json/products.json')
            .then(response => response.json()) //convertir la respuesta a json
            .then(productos => {
                const producto = productos.find(item => item.id === parseInt(id))
                //console.log(producto)
                setProduct(producto)
            })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <ProductDetail product = {product} />
                </div>                
            </div>
        </div>
    );
}

export default ProductDetailContainer;

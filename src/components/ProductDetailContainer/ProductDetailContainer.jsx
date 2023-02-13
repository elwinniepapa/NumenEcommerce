//componente que consulta BDD y muestra un producto en return
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import { getProduct } from "../../assets/firebase";

const ProductDetailContainer = () => {

    const [product, setProduct] = useState([]); //valor inicial es un array []
    const { id } = useParams(); //el parametro ingresa siempre como string

    useEffect(() => {
        getProduct(id)
            .then(producto => {
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

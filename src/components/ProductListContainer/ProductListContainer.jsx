//componente que consulta BDD y muestra productos en return
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductListGenerator from "../ProductListGenerator/ProductListGenerator";
import { getProducts } from "../../assets/firebase";

const ProductListContainer = () => {

    const [products, setProducts] = useState([]); //valor inicial es un array []
    const { category } = useParams(); //el parametro ingresa siempre como string

    useEffect(() => { //con este hook consulto el archivo json (para llamadas asincronicas)

        if (category) {
            getProducts()
                .then(product => {
                    const products = product.filter(producto => producto.idCategoria === parseInt(category)).filter(prod=> prod.stock > 0)
                    const filtratedItems = ProductListGenerator(products)
                    setProducts(filtratedItems)
                })
        } else { //es undefined, estoy en el index
            getProducts()
                .then(items => {
                    const products = items.filter(prod => prod.stock > 0)
                    console.log(products)
                    const itemsFiltered = ProductListGenerator(products)
                    setProducts(itemsFiltered)
                })
        }
    }, [category]); //se ejecuta useEffect cuando hago un cambio en la categoria de mis objetos

    return (
        <div className="container">
            <div className="row centerProducts">
                {products}
            </div>
        </div>
    );
}

export default ProductListContainer;

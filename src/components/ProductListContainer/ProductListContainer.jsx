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
                    const products = product.filter(producto => producto.idCategoria === parseInt(category)).filter(prod => prod.stock > 0)
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
            <div class="row justify-content-md-center marginDown">
                <div className="col col-lg-2 offerText">
                    {
                        (() => {
                            switch (category) {
                                case "1":
                                    return <div className="center-text bold-text category-text">Notebooks</div>;
                                case "2":
                                    return <div className="center-text bold-text category-text">Celulares</div>;
                                case "3":
                                    return <div className="center-text bold-text category-text">Smart TV</div>;
                                case "4":
                                    return <div className="center-text bold-text category-text">Desktop PC</div>;
                                case "5":
                                    return <div className="center-text bold-text category-text">Consolas</div>;
                                case "6":
                                    return <div className="center-text bold-text category-text">Auriculares</div>;
                            }
                        })()
                    }
                </div>
            </div>
            <div className="row centerProducts">
                {products}
            </div>
        </div>
    );
}

export default ProductListContainer;

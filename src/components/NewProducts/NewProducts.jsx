import React from 'react';
import { useState, useEffect } from "react";
import { getProducts } from "../../assets/firebase";
import ProductListGenerator from "../ProductListGenerator/ProductListGenerator";

const NewProducts = () => {

    const [productsnew, setProducts] = useState([]); //valor inicial es un array []

    useEffect(() => {
        getProducts()
            .then(items => {
                const productsnew = items.filter(prod => prod.oferta === "si")                
                const itemsFiltered = ProductListGenerator(productsnew)
                setProducts(itemsFiltered)
            })
    }, []);

    return (
        <div className="container marginDown">
            <div className="row">
                <div className="col-5 fontNoto offerText marginDown">
                    Nuevos ingresos
                </div>
            </div>
            <div className="row centerProducts">
                {productsnew}
            </div>
        </div>
    );

}

export default NewProducts;

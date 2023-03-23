import React from 'react';
import { useState, useEffect } from "react";
import { getProducts } from "../../assets/firebase";
import OfferListGenerator from "../OfferListGenerator/OfferListGenerator";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OfferListContainer = () => {

    const [productsoffer, setProductsOffer] = useState([]); //valor inicial es un array []

    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    useEffect(() => {
        getProducts()
            .then(items => {
                const productsoffer = items.filter(prod => prod.oferta === "si")                
                setProductsOffer(productsoffer)                
            })
    }, []);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "grey" }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "grey" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className="container marginDown">
            <div className="row">
                <div className="col-5 fontNoto offerText marginDown">
                    Ofertas destacadas
                </div>
            </div>            
            <div className="row centerProducts">
                <Slider {...settings}>
                    {
                        /*(() => {
                            if (productsoffer) { 
                                console.log(productsoffer)
                            }
                            else { console.log("No existe el objeto") }
                        })()*/

                        productsoffer.length > 0 && productsoffer.map(product => (
                            <div key={product.id}>
                                <div className="card col-xl-10">
                                    <div className="card-img">
                                        <img src={product.img} className="card-img-top productImage" alt={product.alt} />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{product.nombre} {product.marca} {product.modelo}</p>
                                        <p className="card-text">$ {product.precio}</p>
                                        <button className="btn btn-primary fontNoto"><Link className="nav-link" to={`/product/${product.id}`}>Ver producto</Link></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default OfferListContainer;

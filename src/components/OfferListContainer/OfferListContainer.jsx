import React from 'react';
import { useState, useEffect } from "react";
import { getProducts } from "../../assets/firebase";
import OfferListGenerator from "../OfferListGenerator/OfferListGenerator";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OfferListContainer = () => {

    const [productsoffer, setProducts] = useState([]); //valor inicial es un array []

    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    useEffect(() => {
        getProducts()
            .then(items => {
                const productsoffer = items.filter(prod => prod.oferta === "si")
                const itemsFiltered = OfferListGenerator(productsoffer)
                setProducts(itemsFiltered)
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
                {productsoffer}
                {/*
                <Slider {...settings}>                                        
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                </Slider>
                */}
            </div>
        </div>
    );


    /*const [productsoffer, setProducts] = useState([]); //valor inicial es un array []

    useEffect(() => {
        getProducts()
            .then(items => {
                const productsoffer = items.filter(prod => prod.oferta === "si")
                console.log(productsoffer)
                const itemsFiltered = ProductListGenerator(productsoffer)
                setProducts(itemsFiltered)
            })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-5 fontNoto offerText">
                    Ofertas destacadas
                </div>
            </div>
            <div className="row centerProducts">
                {productsoffer}
            </div>
        </div>
    );*/

}

export default OfferListContainer;

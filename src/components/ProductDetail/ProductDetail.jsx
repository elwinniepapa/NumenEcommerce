import React from 'react';
import Contador from '../Contador/Contador';
import { useCarritoContext } from '../../context/CarritoContext';

const ProductDetail = ({product}) => {

    const {addProduct} = useCarritoContext()

    const onAdd = (contador) =>{
        addProduct(product, contador)
    }

    return (        
        <div className="detailCard row">            
            <div className="detail-card-img col-xl-6">
                <img src={product.img} className="card-img-top detailProductImage" alt={product.alt}/>
            </div>            
            <div className="detail-card-body col-xl-6">
                <p className="card-text detailArticleTitle">{product.nombre} {product.marca} {product.modelo}</p>
                <p className="card-text detailArticlePrice">$ {product.precio}</p>
                <p className="card-text">Stock: {product.stock}</p>
                <Contador stock={product.stock} onAdd={onAdd} />
            </div>            
        </div>        
    );
}

export default ProductDetail;

import React from 'react';
import OfferListGenerator from '../OfferListGenerator/OfferListGenerator';
import NewProducts from '../NewProducts/NewProducts';

const Home = () => {
    return (
        <div>
            <OfferListGenerator />
            <NewProducts />            
        </div>
    );
}

export default Home;

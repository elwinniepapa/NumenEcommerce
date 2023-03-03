//Genero la lista de productos utilizando el molde y la retorno
import Offer from "../Offer/Offer";
import "../App.css"

//Recibo un array de productos
const OfferListGenerator = (products) => {
    return (
        <>
            {
                products.length>0 && products.map(product => <Offer key={product.id} prod={product} />)
            }
        </>
    );
}

export default OfferListGenerator;
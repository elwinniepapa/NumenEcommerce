//Genero la lista de productos utilizando el molde y la retorno
import Product from "../Product/Product";
import "../App.css"

//Recibo un array de productos
const ProductListGenerator = (products) => {
    return (
        <>
            {
                products.length>0 && products.map(product => <Product key={product.id} prod={product} />)
            }
        </>
    );
}

export default ProductListGenerator;

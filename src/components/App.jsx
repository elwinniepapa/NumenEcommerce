import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import ProductListContainer from './ProductListContainer/ProductListContainer';
import ProductDetailContainer from './ProductDetailContainer/ProductDetailContainer';
import Cart from './Cart/Cart';
import { CarritoProvider } from '../context/CarritoContext';

//test firebase
import { addBDD, getProducts } from '../assets/firebase'

function App() {
  //addBDD()
  getProducts()
  return (
    <div>
      {/* El carrito Provider envuelve todo porque lo voy a utilizar en todas las secciones */}
      <CarritoProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ProductListContainer />}></Route>
            <Route path='/category/:category' element={<ProductListContainer />}></Route>
            <Route path='/product/:id' element={<ProductDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout' element={<p>Checkout</p>}></Route>
          </Routes>
        </BrowserRouter>        
      </CarritoProvider>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import ProductListContainer from './ProductListContainer/ProductListContainer';
import ProductDetailContainer from './ProductDetailContainer/ProductDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import 'react-toastify/dist/ReactToastify.css'

//React Toastify
import { ToastContainer } from 'react-toastify';

//Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Context
import { CarritoProvider } from '../context/CarritoContext';


function App() {
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
            <Route path='/checkout' element={<Checkout />}></Route>
          </Routes>
          <ToastContainer/>
        </BrowserRouter>        
      </CarritoProvider>
    </div>
  );
}

export default App;

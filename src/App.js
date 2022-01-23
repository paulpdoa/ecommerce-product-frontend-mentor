import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Shoe from "./components/Shoe";
import Cart from './components/Cart';
import Lightbox from "./components/Lightbox";

import { useState } from 'react';

function App() {

  const [showLightbox,setShowLightbox] = useState(false);
  const [quantity,setQuantity] = useState(0);
  const [count,setCount] = useState(0);
  const [orders,setOrders] = useState([]);
  const [showImg,setShowImg] = useState('/images/image-product-1.jpg');

  return (
    <>
    { showLightbox && <Lightbox showImg={showImg} setShowImg={setShowImg} showLightbox={showLightbox} setShowLightbox={setShowLightbox} /> }
     <Navbar Cart={Cart} quantity={quantity} orders={orders} setOrders={setOrders} setQuantity={setQuantity} count={count} />
     <div className="center-content">
        <div className="fit-content flex justify-center items-center md:h-screen">
          <div className="md:grid md:grid-cols-2">
            <Shoe setShowLightbox={setShowLightbox} showLightbox={showLightbox} showImg={showImg} setShowImg={setShowImg} />
            <Info Cart={Cart} quantity={quantity} setQuantity={setQuantity} setOrders={setOrders} setCount={setCount} />
          </div> 
        </div>  
     </div>
    
    </>
  );
}

export default App;

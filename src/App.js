import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShowen, setCartIsShowen] = useState(false);

  const showCartHandler = () => {
    setCartIsShowen(true);
  };

  const hideCartHandler = () => {
    setCartIsShowen(false);
  };

  return (
    <CartProvider>
      {cartIsShowen && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

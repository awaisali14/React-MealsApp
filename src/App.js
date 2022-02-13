import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [Isvalid, setIsVaild] = useState(false);
  const showModalHandler = () => {
    setIsVaild(true);
  };
  const hideModalHandler = () => {
    setIsVaild(false);
  };
  return (
    <CartProvider>
      <Header modleHandler={showModalHandler} />
      {Isvalid && <Cart hidemodleHandler={hideModalHandler} />}

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

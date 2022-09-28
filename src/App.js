import "./App.css";
import Header from "./pages/LandingPage/Header";
import { CartContextProvider } from "./pages/Cart/context/CartContext";
import Body from "./pages/MenuPage/Body";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      {/* <Cursor /> */}
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/collection" element={<Body />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

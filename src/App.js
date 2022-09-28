import "./App.css";
import Header from "./pages/LandingPage/Header";

import Body from "./pages/MenuPage/Body";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      {/* <Cursor /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/collection" element={<Body />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

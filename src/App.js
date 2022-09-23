import "./App.css";
import Header from "./pages/LandingPage/Header";
import Cursor from "./pages/cursor/Cursor";
import Body from "./pages/MenuPage/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/menu" element={<Body />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

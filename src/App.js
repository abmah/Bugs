import "./App.css";
import Header from "./components/Header/Header";
import Cursor from "./components/cursor/Cursor";
import Body from "./components/body/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cursor />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/body" element={<Body />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

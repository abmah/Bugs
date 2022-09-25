import "./App.css";
import Header from "./pages/LandingPage/Header";
// import Cursor from "./pages/cursor/Cursor";
import Body from "./pages/MenuPage/Body";
import Test from "./pages/Test/Test";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Cursor /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/collection" element={<Body />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

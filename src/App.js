import "./App.css";
import Header from "./components/Header/Header";
import Cursor from "./components/cursor/Cursor";
import Body from "./components/body/Body";
function App() {
  return (
    <div className="App">
      <div className="frog">
        <Header />
        <Body />
        <Cursor />
      </div>
    </div>
  );
}

export default App;

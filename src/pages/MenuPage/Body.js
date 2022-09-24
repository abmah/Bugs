import "./body.css";
import { useState } from "react";
import caterpiller from "../../images/caterpillar.jpg";
import TempPage from "./Temp/TempPage";
export default function Body() {
  const [previousPage, setPreviousPage] = useState(true);
  setTimeout(() => {
    setPreviousPage(false);
  }, 750);

  const showPage = (
    <div>
      <div className="main-cart">cart</div>
      <div className="cater">
        <img src={caterpiller} alt="caterpiller" className="caterpiller1" />
        <div className="cater1">Caterpillar</div>
        <div className="cater2">
          <ul className="cater-list">
            <li>could be a moth or a butterfly</li>

            <li className="coming-soon">coming soon</li>
          </ul>
        </div>
      </div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </div>
  );
  return <>{previousPage ? <TempPage /> : showPage}</>;
}

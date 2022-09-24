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
      <div className="cater">
        <img src={caterpiller} alt="caterpiller" className="caterpiller1" />
        <div className="cater1">Caterpillar</div>
        <div className="cater2">
          not a bug lookgs ok has very mild acne and will be around the day
        </div>
      </div>
      <div>hello</div>
    </div>
  );
  return <>{previousPage ? <TempPage /> : showPage}</>;
}

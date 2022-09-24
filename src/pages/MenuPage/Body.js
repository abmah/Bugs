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
      <img src={caterpiller} alt="caterpiller" className="caterpiller1" />
    </div>
  );
  return <>{previousPage ? <TempPage /> : showPage}</>;
}

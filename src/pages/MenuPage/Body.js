import "./body.css";
import { useState } from "react";
import caterpiller from "../../images/caterpillar.jpg";
export default function Body() {
  const [previousPage, setPreviousPage] = useState(true);
  setTimeout(() => {
    setPreviousPage(false);
  }, 1500);

  const hiddenPage = (
    <div className="header-body">
      <div className="nav-bar-body">
        <div to={"/collection"}>collection</div>
        <div>cart</div>
      </div>
      <div className="title-body">BUGS</div>
      <img src={caterpiller} alt="caterpiller" className="caterpiller" />
    </div>
  );

  const showPage = (
    <div>
      <img src={caterpiller} alt="caterpiller" className="caterpiller1" />
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
      <div>hell</div>
    </div>
  );
  return <>{previousPage ? hiddenPage : showPage}</>;
}

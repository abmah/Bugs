import React from "react";

export default ({ url, active, x, y }) => {
  return (
    <img
      src={url}
      style={{
        width: active ? "20vw" : "20vw",
        opacity: active ? "1" : "0",

        transition: "all 0.2s ease-in-out",
      }}
    />
  );
};

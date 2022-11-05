import React from "react";

function Backdrop({ backdrop, showBackDrop }) {
  return (
    <div
      className={backdrop ? "backdrop backdrop--open" : "backdrop"}
      onClick={() => showBackDrop()}
    ></div>
  );
}

export default Backdrop;

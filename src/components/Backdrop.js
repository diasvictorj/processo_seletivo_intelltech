import React from "react";

function Backdrop({ backdrop }) {
  return (
    <div className={backdrop ? "backdrop backdrop--open" : "backdrop"}></div>
  );
}

export default Backdrop;

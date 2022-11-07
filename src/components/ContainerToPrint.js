import React from "react";
import Content from "./Content";

const ContainerToPrint = React.forwardRef(({ props }, ref) => {
  return (
    <div className="content">
      <div ref={ref} className="container">
        {props.map((e, i) => (
          <Content key={i} element={e} />
        ))}
      </div>
    </div>
  );
});

export default ContainerToPrint;

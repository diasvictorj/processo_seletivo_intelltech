import React from "react";
import Content from "./Content";

const ContainerToPrint = React.forwardRef(({ props }, ref) => {
  return (
    <div ref={ref} className="container content">
      {props.map((e, i) => (
        <Content key={i} element={e} />
      ))}
    </div>
  );
});

export default ContainerToPrint;

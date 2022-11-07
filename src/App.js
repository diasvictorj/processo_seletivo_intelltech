import React from "react";
import ToolBar from "./components/ToolBar";
import SideNav from "./components/SideNav";
import Backdrop from "./components/Backdrop";
import ContainerToPrint from "./components/ContainerToPrint";
import Box from "./components/Box";
import { useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { createRef } from "react";

function App() {
  const [box, setBox] = useState({ type: "", active: false });
  const [backdrop, setBackdrop] = useState(false);
  const [elementsOnPage, setElements] = useState([]);

  function addElementsOnPage(e) {
    setElements((previousState) => [...previousState, e]);
    setBox({ type: "", active: false });
  }

  function openBox(box) {
    setBox({ type: box.type, active: true });
  }
  function closeBox() {
    setBox({ type: "", active: false });
  }
  function showBackDrop() {
    setBackdrop((previousState) => !previousState);
  }
  useEffect(() => {
    console.log("Re-Render");
  }, [box, backdrop, elementsOnPage]);

  const componentRef = createRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <ToolBar />
      <SideNav
        openBox={openBox}
        backDrop={showBackDrop}
        handlePrint={handlePrint}
      />
      <Backdrop backdrop={backdrop} showBackDrop={showBackDrop} />
      {box.active ? (
        <Box box={box} closeBox={closeBox} addElements={addElementsOnPage} />
      ) : null}
      <ContainerToPrint props={elementsOnPage} ref={componentRef} />

      {/* <div className="content">
        <div className="container">
          {elementsOnPage.map((e, i) => (
            <Content key={i} element={e} />
          ))}
        </div>
      </div> */}
    </>
  );
}

export default App;

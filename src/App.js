import React from "react";
import ToolBar from "./components/ToolBar";
import SideNav from "./components/SideNav";
import Backdrop from "./components/Backdrop";
import Box from "./components/Box";
import { useState, useEffect } from "react";

function App() {
  const [box, setBox] = useState({ type: "", active: false });
  const [backdrop, setBackdrop] = useState(false);

  function openBox(box) {
    setBox({ type: box.type, active: true });
  }
  function showBackDrop() {
    setBackdrop((previousState) => !previousState);
  }

  useEffect(() => {
    console.log("Re-Render", backdrop);
  }, [box, backdrop]);

  return (
    <>
      <ToolBar />
      <SideNav openBox={openBox} backDrop={showBackDrop} />
      <Backdrop backdrop={backdrop} showBackDrop={showBackDrop} />
      <div className="content">
        <div className="container">"Bora bill"</div>
        {box.active ? <Box type={box.type} /> : null}
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
import ToolBar from "./components/ToolBar";
import Backdrop from "./components/Backdrop";

function App() {
  const [sidebar, setSideBar] = useState(false);

  /* useEffect(() => {
    console.log("Use Effect");
  }, [sidebar]); */

  const toggleSideBar = () => {
    setSideBar((previousState) => !previousState);
  };
  return (
    <>
      <button onClick={() => setSideBar(!sidebar)}>CARAIO</button>
      <ToolBar openSideBar={toggleSideBar} />
      <SideBar sidebar={sidebar} />
      <Backdrop sidebar={sidebar} closeSideBar={toggleSideBar} />
      <div className="content">
        <div className="container">"Bora bill"</div>
      </div>
    </>
  );
}

export default App;

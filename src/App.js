import React from "react";
import ToolBar from "./components/ToolBar";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <ToolBar />
      <SideNav />

      <div className="content">
        <div className="container">"Bora bill"</div>
      </div>
    </>
  );
}

export default App;

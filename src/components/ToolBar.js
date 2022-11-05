import React from "react";

export default function ToolBar({ openSideBar }) {
  return (
    <div className="toolbar">
      <div className="hamburguer-btn" onClick={openSideBar}>
        <button>MENU</button>
        <i className="ri-menu-line"></i>
      </div>
      <div className="title"> IntellTech Report Generator</div>
    </div>
  );
}

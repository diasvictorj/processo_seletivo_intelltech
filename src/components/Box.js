import React, { useRef } from "react";

function Box({ box, closeBox }) {
  const textInput = useRef();
  const boxContent = () => {
    switch (box.type) {
      case "image": {
        return (
          <div>
            <label> Insira a Url da imagem</label>
            <input ref={textInput} type="text"></input>
            <button
              type="submit"
              onClick={() => console.log("click", textInput.current.value)}
            >
              inserir
            </button>
          </div>
        );
      }
      /* case"chart": {
        return getRandomChart();
      } */
      default:
        return <p>"Ops..."</p>;
    }
  };
  return (
    <div id="myModal" className={box.active ? "modal--open" : "modal"}>
      <div className="modal-content">
        <span className="close" onClick={() => closeBox()}>
          &times;
        </span>
        {boxContent()}
      </div>
    </div>
  );
}

export default Box;

import React, { useRef } from "react";
/* import Axios from "axios"; */

function Box({ box, closeBox, addElements }) {
  const urlInput = useRef();
  const larguraInput = useRef();
  const alturaInput = useRef();
  const bordaInput = useRef();
  const larguraBordaInput = useRef();
  const tituloInput = useRef();

  const imageElement = (data) => {
    const styleObj = {
      width: data.width,
      height: data.height,
      border_width: data.borderPx,
      border: () => {
        if (data.border && !(data.borderPx === null))
          return `border: ${data.border.px}`;
        else return null;
      },
    };
    const element = (
      <div style={{ "max-width": data.width, "max-height": data.heigth }}>
        <h1>{data.title}</h1>
        <img src={`${data.url}`} style={styleObj} alt="imgInserida" />
      </div>
    );
    //urls para teste
    //https://images.unsplash.com/photo-1584713503693-bb386ec95cf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60
    //https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80
    addElements(element);
  };

  /* const chartElement = async () => {
    const newChart = await getRandomChart();
    addElements(<EChart data={newChart} />);
  };
 */
  const boxContent = () => {
    switch (box.type) {
      case "image": {
        return (
          <form>
            <label> Insira o titulo</label>
            <input ref={tituloInput} type="text"></input>
            <label> Insira a Url da imagem</label>
            <input ref={urlInput} type="text"></input>
            <label> Insira a Largura do componente </label>
            <input ref={larguraInput} type="text"></input>
            <label> Insira a Altura do componente </label>
            <input ref={alturaInput} type="text"></input>
            <label> Usar Borda? </label>
            <input
              name="borda"
              ref={bordaInput}
              type="radio"
              value="Sim"
              id="true_borda"
            />
            <label htmlFor="true_borda"> Sim</label>
            <input
              name="borda"
              ref={bordaInput}
              type="radio"
              value="Sim"
              id="false_borda"
            />
            <label htmlFor="false_borda"> Não</label>

            <label> Insira a Largura da Borda</label>
            <input ref={larguraBordaInput} type="text"></input>
            <button
              type="submit"
              onClick={() =>
                imageElement({
                  url: urlInput.current.value,
                  width: larguraInput.current.value,
                  height: alturaInput.current.value,
                })
              }
            >
              inserir
            </button>
          </form>
        );
      }
      /* case "chart": {
        return chartElement();
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

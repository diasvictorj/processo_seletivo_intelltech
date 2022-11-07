import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function sideNav({ openBox, backDrop }) {
  return (
    <SideNav
      className="mysidenav"
      onSelect={(selected) => console.log("Hello" + selected)}
    >
      <SideNav.Toggle onClick={() => backDrop()} />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="Home">
          <NavIcon>
            <i style={{ fontSize: "1.5em" }} className="fa fa-fw fa-home"></i>
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="Add-Item">
          <NavIcon>
            <i style={{ fontSize: "1.5em" }} className="fa-solid fa-plus"></i>
          </NavIcon>
          <NavText>Adcionar Item</NavText>
          <NavItem
            onClick={() => openBox({ type: "image", active: true })}
            eventKey="Add-Image"
          >
            <NavText>Imagem</NavText>
          </NavItem>
          <NavItem
            onClick={() => openBox({ type: "chart", active: true })}
            eventKey="Add-Chart"
          >
            <NavText>Graficos</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="Print">
          <NavIcon>
            <i style={{ fontSize: "1.5em" }} className="fa-solid fa-print"></i>
          </NavIcon>
          <NavText>Imprimir pagina</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default sideNav;

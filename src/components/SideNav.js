import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function sideNav() {
  return (
    <SideNav
      className="mysidenav"
      onClick={() => console.log("NavBar")}
      onSelect={(selected) => console.log("Hello" + selected)}
    >
      <SideNav.Toggle />
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
          <NavItem eventKey="Add-Image">
            <NavText>Imagem</NavText>
          </NavItem>
          <NavItem eventKey="Add-Chart">
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

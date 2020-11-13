import React from "react";
import { Media } from "reactstrap";
import { Container, Button} from "./styles.js";
import logo from "../../assets/logo.png";
import {Img} from "react-image";

function Header() {
  return (
    <>
      <Container>
        <span>Aqui vai o logo</span>
        <Button className="button" to="/">Sair</Button>
        <Media resizeMode="contain" source={logo} alt="Logo" src={logo} />
      </Container>
    </>
  );
}

export default Header;

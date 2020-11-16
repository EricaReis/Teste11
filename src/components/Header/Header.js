import React from "react";
import { Media } from "reactstrap";
import { Container, Button, Logo} from "./styles.js";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <>
      <Container>
        <Logo src={logo}></Logo>
        <Button className="button" to="/">Sair</Button>
      </Container>
    </>
  );
}

export default Header;

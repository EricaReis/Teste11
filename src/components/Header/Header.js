import React from "react";
import {Button, Media} from "reactstrap";
import { Container } from "./styles.js";

function Header() {
  return (
    <>
      <Container>
      <Media left href="#">
        <Media object data-src="" alt="logo" />
      </Media>
        <span>header</span>
      <Button color="info" size="sm">Sair</Button>
      </Container>
    </>
  );
}

export default Header;
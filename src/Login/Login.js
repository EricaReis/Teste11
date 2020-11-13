import React from "react";
import { Input, Button, Row } from "reactstrap";
import { Link } from "react-router-dom";

import {
  Container,
  Description,
  Title,
  ContainerInput,
  ContainerButton,
} from "./styles";
import Header from ".././components/Header/Header";
import Register from "../Register/Register"

function Login() {
  return (
    <>
      <Header />
      <Container>
        <ContainerInput>
          <Title>Entrar</Title>
          <Row>
            <Description>E-mail</Description>
            <Input className="input"></Input>
            <Description>Senha</Description>
            <Input className="input"></Input>
            <ContainerButton>
              <Button color="info"> Entrar 
              </Button>
            </ContainerButton>
          </Row>
        </ContainerInput>
      </Container>
    </>
  );
}

export default Login;

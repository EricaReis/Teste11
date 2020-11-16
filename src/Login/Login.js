import React from "react";
import { Input, Row } from "reactstrap";

import {
  Container,
  Description,
  Title,
  ContainerInput,
  ContainerButton,
  Button
} from "./styles";
import Header from ".././components/Header/Header";

function Login() {
  return (
    <>
      <Header />
      <Container>
        <ContainerInput>
          <Container>
          <Title>Entrar</Title>
            <Description>E-mail</Description>
            <Input className="input"></Input>
            <Description>Senha</Description>
            <Input className="input"></Input>
            <ContainerButton>
                <Button className="button" to="/movement">Entrar</Button>
                <Button to="/register">Cadastrar</Button>
            </ContainerButton>
          </Container>
        </ContainerInput>
      </Container>
    </>
  );
}

export default Login;

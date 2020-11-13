import React from "react";
import {
  Input,
  Button,
  Row,
} from "reactstrap";
import {
  Container,
  Description,
  Title,
  ContainerInput,
  ContainerButton
} from "./styles";

function Login() {
  return (
    <Container>
      <ContainerInput>
        <Title>Entrar</Title>
        <Row>
        <Description>E-mail</Description>
        <Input className="input"></Input>
        <Description>Senha</Description>
        <Input className="input"></Input>
        <ContainerButton>
        <Button color="info">Salvar</Button>
        </ContainerButton>
        </Row>
      </ContainerInput>
    </Container>
  );
}

export default Login;

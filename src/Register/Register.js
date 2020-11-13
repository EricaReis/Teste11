import React from "react";
import {
  Input,
  Button,
  Row,
  Col
} from "reactstrap";
import {
  Container,
  Description,
  Title,
  ContainerInput,
  ContainerButton,
} from "./styles";

function Register() {
  return (
    <Container>
      <ContainerInput>
        <Title>Cadastro</Title>
        <Description>Nome</Description>
        <Input className="input"></Input>
        <Description>E-mail</Description>
        <Input className="input"></Input>
        <Description>Senha</Description>
        <Input className="input"></Input>
        <ContainerButton>
          <Row>
            <Col>
          <Button color="info">Cadastrar</Button>
            </Col>
            <Col>
          <Button color="info">Voltar</Button>
            </Col>
          </Row>
        </ContainerButton>
      </ContainerInput>
    </Container>
  );
}

export default Register;

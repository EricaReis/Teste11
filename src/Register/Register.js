import React from "react";
import { Input, Row, Col } from "reactstrap";
import {
  Container,
  Description,
  Title,
  Button,
  ContainerInput,
  ContainerButton,
} from "./styles";
import Header from ".././components/Header/Header";

function Register() {
  return (
    <>
      <Header />
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
              <Button className="button" to="/">Voltar</Button>
              </Col>
            </Row>
          </ContainerButton>
        </ContainerInput>
      </Container>
    </>
  );
}

export default Register;

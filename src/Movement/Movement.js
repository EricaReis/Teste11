import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
  Row,
  Col,
  Card,
} from "reactstrap";
import {
  Container,
  Description,
  Title,
  ContainerInput,
  ContainerButton,
  ContainerItems,
} from "./styles";
import Header from ".././components/Header/Header";

function Movement() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <Header />
      <Container>
        <ContainerItems>
          <Title>Movimentações</Title>
          <Card />
          <ContainerInput>
            <Description>Descrição</Description>
            <Input></Input>
            <Description>Valor</Description>
            <Input></Input>
          </ContainerInput>
          <ContainerButton>
            <Row>
              <Col>
                <Button color="info">Cadastrar</Button>
              </Col>
              <Col>
                <Button color="info">Relatório</Button>
              </Col>
              <Col>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle color="info" caret>
                    Tipo
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Tipo</DropdownItem>
                    <DropdownItem>Entrada</DropdownItem>
                    <DropdownItem>Saída</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </ContainerButton>
        </ContainerItems>
      </Container>
    </>
  );
}

export default Movement;

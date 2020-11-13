import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
  ContainerItems,
} from "./styles";

function Movement() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Container>
      <ContainerItems>
        <Title>Movimentações</Title>
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
            <DropdownToggle color="info"caret>Dropdown</DropdownToggle>
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
  );
}

export default Movement;

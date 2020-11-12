import React from 'react';
import {
  Card, 
  CardBody
} from 'reactstrap';
import {
  Container,
  Button,
  Description,
  Title,
  ContainerInput,
  Input, 
  ContainerButton,
  ContainerItems
}from './styles';

function Movement() {
return (
  <Container>
    <ContainerItems>
    <Title>Movimentações</Title>
    <ContainerInput>
      <Description>Descrição</Description>
    <Input></Input>
      <Description>Valor</Description>
    <Input></Input>
    <select name="select" id="select">
      <option value="01">select 01</option>
      <option value="02">select 02</option>
    </select>
    </ContainerInput>
    <ContainerButton>
      <Button>Cadastrar</Button>
      <Button>Relatório</Button>
    </ContainerButton>
    </ContainerItems>
  </Container>
);
}

export default Movement;
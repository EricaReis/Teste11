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
      <Description>Descrição</Description>
    <Input></Input>
      <Description>Valor</Description>
    <Input></Input>
    <select name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    <Button>Cadastrar</Button>
    <Button>Relatório</Button>
    </ContainerItems>
  </Container>
);
}

export default Movement;
import {
  Container,
  Button,
  Description,
  Title,
  ContainerInput,
  Input
}from './styles';

function Register() {
return (
<Container>
 <ContainerInput>
   <Title>Cadastro</Title>
     <Description>Nome</Description>
       <Input className = "input"></Input>
     <Description>E-mail</Description>
       <Input className = "input"></Input>
     <Description>Senha</Description>
       <Input className = "input"></Input>
       <Button>Salvar</Button>
 </ContainerInput> 
</Container>
);
}

export default Register;

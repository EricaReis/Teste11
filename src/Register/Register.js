import {
  Container,
  Button,
  Description,
  Title,
  ContainerInput,
  Input, 
  ContainerButton
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
      <ContainerButton>
        <Button>Cadastrar</Button>
        <Button>Voltar</Button>  
      </ContainerButton>
 </ContainerInput> 
</Container>
);
}

export default Register;

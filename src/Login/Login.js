import {
       Container,
       Button,
       Description,
       Title,
       ContainerInput,
       Input
}from './styles';

function Login() {
  return (
    <Container>
      <ContainerInput>
        <Title>Entrar</Title>
          <Description>E-mail</Description>
            <Input className = "input"></Input>
          <Description>Senha</Description>
            <Input className = "input"></Input>
            <Button>Salvar</Button>
      </ContainerInput> 
    </Container>
  );
}

export default Login;

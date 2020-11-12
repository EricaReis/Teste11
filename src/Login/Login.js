import './styles.scss';
import {
  Input, 
  Button
} from 'reactstrap';


function Login() {
  return (
    <div className = "container">
      <div className = "container-input">
        <span className = "title">Entrar</span>
        <h2 className = "title">E-mail</h2>
          <Input className = "input"></Input>
        <span className = "title">Senha</span>
          <Input className = "input"></Input>
          <Button color="primary" size="lg" active>Salvar</Button>
      </div> 
      </div>
  );
}

export default Login;

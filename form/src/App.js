import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulario de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviar} validacaoCPF={validacaoCPF}/>
    </Container>
  );
}

function aoEnviar(dados){
  console.log(dados);
}

function validacaoCPF(tmpValue){
  if(tmpValue.length !== 11){
      return{cpf:{valido: false, texto: "CPF deve ter 11 digitos"}};
  } else {
      return{cpf:{valido: true, texto: ""}};
  }
}
export default App;

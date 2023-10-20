import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, redirect } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import axios from "axios";

export function SignIn() {

  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    signIn({email, password})

    const response = await axios.post("http://localhost:3333/sessions", {email, password}) 
    
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
    }

    if(response.data.isAdmin === 1) {
      return redirect("/HomeAdmin")
    }
  }

  return (
    <Container>
      <div>
        <img src="/src/assets/imagens/Polygon1.svg" alt="polygon" />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h1 className="form">Faça login</h1>

        <div className="formInput">
          <p>Email</p>
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br" 
            type="email" 
            onChange={(event) => {
              setEmail(event.target.value)
            }} 
          />
        </div>

        <div className="formInput">
          <p>Senha</p>
          <Input 
            placeholder="No mínimo 6 caracteres" 
            type="password" 
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
        </div>

        <Button title="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">Crie uma conta</Link>
      </Form>
    </Container>
  );
}

/* 1-pegar dados do input , senhha e email
  2 - criar função signIn
  3 - Dentro da função adicionar o axios do tipo post, informando a rota e o corpo
  4- adicionar função no botão

*/

import { Container, Form } from "./styles";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/Home");
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.")
      }
    })
  }

  return (
    <Container>
      <div>
        <img src="/src/assets/Polygon1.svg" alt="polygon" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <h1>Crie sua conta</h1>

        <div className="formInput">
          <p>Seu nome</p>

          <Input
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="formInput">
          <p>Email</p>

          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br" 
            type="email" 
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="formInput">
          <p>Senha</p>

          <Input 
            placeholder="No mínimo 6 caracteres" 
            type="password" 
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button 
          title="Criar conta"
          onClick={handleSignUp}
        />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}

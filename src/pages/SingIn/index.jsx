import { Container, Form } from "./styles";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
    return(
        <Container>
            <div>
                <img src="/src/assets/Polygon 1.svg" alt="polygon" />
                <h1>food explorer</h1>
            </div>
            <Form>
                <h1>Crie sua conta</h1>

                <div className="FormInput">
                    <p>Seu nome</p>
                    <Input
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                    />
                </div>

                <div className="FormInput">
                    <p>Email</p>
                    <Input
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="email"
                    />
                </div>

                <div className="FormInput">
                    <p>Senha</p>
                    <Input
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                    />
                </div>

                <Button>Criar conta</Button>

                <a href="/">Já tenho uma conta</a>


            </Form>
        </Container>
    );
}
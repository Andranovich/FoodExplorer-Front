import { Container } from "./styles";

export function HomeBanner() {
  return (
    <Container>
      <div>
        <img src="/pngegg1.png" alt="fruits" />

        <div className="slogan">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </div>
    </Container>
  );
}

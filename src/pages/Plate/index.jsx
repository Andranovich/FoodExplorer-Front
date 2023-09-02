import { Container, Footer } from "./styles";
import { Navbar } from "../../components/Navbar";
import { PiCaretLeft } from "react-icons/pi";

export function Plate() {
  return (
    <main>
      <Navbar />
      <Container>
        <a href="/">
          <PiCaretLeft fontSize={32} />
          voltar
        </a>
        <div className="dish">
          <img src="../../../src/assets/imagens/DishRavanello.svg" alt="Food" />
          <div className="dishInfo">
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <span>alface</span>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}

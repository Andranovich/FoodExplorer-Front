import { Container, Footer } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonInclude } from "../../components/ButtonInclude";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";

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
            <div className="tags">
              <span>alface</span>
              <span>cebola</span>
              <span>pão naan</span>
              <span>pepino</span>
              <span>pepino</span>
              <span>pepino</span>
            </div>
            <div className="amount">
              <div className="counter">
                <a href="/">
                  <AiOutlineMinus />
                </a>
                <h4>01</h4>
                <a href="/">
                  <AiOutlinePlus />
                </a>
              </div>
              <ButtonInclude
                className="buttonDesktop"
                title="incluir ∙ R$ 25,00"
              />
              <Button
                className="buttonMobile"
                icon={<PiReceipt />}
                title="pedir ∙ R$ 25,00"
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}

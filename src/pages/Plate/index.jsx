import { Container, Footer } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonInclude } from "../../components/ButtonInclude";
import { Amount } from "../../components/Amount";
import { PiReceipt } from "react-icons/pi";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Plate() {
  const { user } = useAuth();
  const isAdmin = user.isAdmin;
  const [value, setValue] = useState(1);


  return (
    <main>
      <Navbar />
      <Container>
        {isAdmin ? (
          <div>
            <a className="backArrow" href="/">
              <PiCaretLeft fontSize={32} />
              voltar
            </a>
            <div className="dish">
              <img
                src="../../../src/assets/imagens/DishRavanello.svg"
                alt="Food"
              />
              <div className="dishInfo">
                <h1>Salada Ravanello</h1>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim. O pão naan dá um toque especial.
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
                  
                  <Link to="/EditPlate">
                    <ButtonInclude
                      className="buttonDesktop "
                      title="Editar prato"
                    />

                  </Link>

                  <Button
                    className="buttonMobile"
                    title="Editar prato"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <a className="backArrow" href="/">
              <PiCaretLeft fontSize={32} />
              voltar
            </a>
            <div className="dish">
              <img
                src="../../../src/assets/imagens/DishRavanello.svg"
                alt="Food"
              />
              <div className="dishInfo">
                <h1>Salada Ravanello</h1>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim. O pão naan dá um toque especial.
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
                  {!isAdmin && <Amount value={value} setValue={setValue} />}
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
          </div>
        )}
      </Container>
      <Footer />
    </main>
  );
}

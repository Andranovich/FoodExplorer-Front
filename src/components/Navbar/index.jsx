import { Content, Container, Navigation } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { PiReceipt } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { useAuth } from "../../hooks/auth";
import { Button } from "../Button";
import { Input } from "../Input";
import { Link, useNavigate } from "react-router-dom";

export function Navbar({ setSearch }) {
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  function handleNew() {
    navigate("/");
  }

  return (
    <Navigation>
      <Container>
        <Content>
          <nav className="desktop">
            <div>
              <img src="/src/assets/imagens/Polygon1.svg" alt="polygon" />
              <h1 className="logoName">food explorer</h1>
            </div>

            {user.is_admin === 0 ? (
              <>
                <ButtonText title="Meus favoritos" />
              </>
            ) : (
              <button className="buttonText" type="button" onClick={handleNew}>
                admin
              </button>
            )}

            <Input
              className="inputNavbar"
              icon={BiSearch}
              placeholder="Busque por pratos ou ingredientes"
              onChange={event => setSearch(event.target.value)}
            />

            <Button icon={<PiReceipt />} title="Pedidos (0)" />
            
            <Link onClick={signOut} className="ButtonSignOut">
              <GoSignOut />
            </Link>
          </nav>

          <nav className="mobile">
            <div className="mobile-menu">
              <a href="/">
                <AiOutlineMenu />
              </a>
            </div>

            <div className="logo">
              <img src="/src/assets/imagens/Polygon1.svg" alt="polygon" />
              <h1>food explorer</h1>
            </div>

            <div>
              <a href="/">
                <PiReceipt />
              </a>
            </div>
          </nav>
        </Content>
      </Container>
    </Navigation>
  );
}

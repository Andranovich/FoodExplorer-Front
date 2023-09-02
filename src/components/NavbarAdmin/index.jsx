import { Container } from "./styles";
import { Button } from "../Button";
import { Input } from "../Input";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { PiReceipt } from "react-icons/pi";

export function NavbarAdmin() {
  return (
    <Container>
      <nav className="desktop">
        <div>
          <img src="/src/assets/imagens/Polygon1.svg" alt="polygon" />
          <h1>food explorer</h1>
          <p>admin</p>
        </div>
        <Input
          className="inputNavbar"
          icon={BiSearch}
          placeholder="Busque por pratos ou ingredientes"
        />

        <Button 
          title="Novo Produto" 
        />
        <a href="/" className="ButtonSignOut">
          <GoSignOut />
        </a>
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
          <p>admin</p>
        </div>

        
      </nav>
    </Container>
  );
}

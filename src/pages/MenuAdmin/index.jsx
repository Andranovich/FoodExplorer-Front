import { Container } from "./styles";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { InputMobile } from "../../components/InputMobile";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { NewPlate } from "../../pages/NewPlate";
import { SignIn } from "../../pages/SignIn";

export function MenuAdmin() {
  return (
    <main>
      <Container>
        <div className="header">
          <a href="/">
            <AiOutlineClose size={28} />
            Menu
          </a>
        </div>

        <div className="search">
          <InputMobile
            className="inputNavbar"
            icon={BiSearch}
            placeholder="Busque por pratos ou ingredientes"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="buttons">
          <Link to="/NewPlate">
            <a> Novo prato</a>
          </Link>
          <Link to="/SignIn">
            <a> Sair</a>
          </Link>
        </div>
      </Container>
      <Footer />
    </main>
  );
}

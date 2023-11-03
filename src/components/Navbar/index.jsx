import { Content, Container, Navigation, NewLink } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { PiReceipt } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { useAuth } from "../../hooks/auth";
import { Button } from "../Button";
import { Input } from "../Input";
import { MenuAdmin } from "../../pages/MenuAdmin";
import { Menu } from "../../pages/Menu";
import { Link, useNavigate } from "react-router-dom";

export function Navbar({ setSearch, id, ...rest }) {
  const { signOut, user } = useAuth();
  const isAdmin = user.isAdmin;

  

  return (
    <Navigation>
      <Container {...rest} id={id}>
        <Content>
          
          <nav className="desktop">
            {isAdmin ? (
              <div>
                <img src="/src/assets/imagens/Polygon1.svg" alt="polygon" />
                <h1 className="logoName">food explorer</h1>
                <p className="admin">admin</p>
              </div>
            ):(
              <div>
                <img src="/src/assets/imagens/Polygon1.svg" alt="polygon" />
                <h1 className="logoName">food explorer</h1>
              </div>
            )}
            

            <Input
              className="inputNavbar"
              icon={BiSearch}
              placeholder="Busque por pratos ou ingredientes"
              onChange={event => setSearch(event.target.value)}
            />

            {isAdmin ? (
              <NewLink to="/NewPlate">
                <Button title="Novo Prato" />
              </NewLink>
              
            ): (
              <Button icon={<PiReceipt />} title="Pedidos (0)" />

            )}
            
            <Link onClick={signOut} className="ButtonSignOut">
              <GoSignOut />
            </Link>
          </nav>

          <nav className="mobile">

            {isAdmin ? (
              <div className="mobile-menu">
                
                <Link to="/MenuAdmin">
                  <AiOutlineMenu />
                </Link>
              </div>

            ):(
              <div className="mobile-menu">
                
                <Link to="/Menu">
                  <AiOutlineMenu />
                </Link>
              </div>
            )
            }
            

            {isAdmin ? (
              <div className="logo">
                <img src="/src/assets/imagens/Polygon1.svg" alt="polygon" />
                <h1>food explorer</h1>
                <p className="admin">admin</p>
              </div>
              ):(
              <div className="logo">
                <img src="/src/assets/imagens/Polygon1.svg" alt="polygon" />
                <h1>food explorer</h1>
              </div>
              )}            

            {isAdmin ? (
              <div></div>
            ):(
            <div>
              <a href="/">
                <PiReceipt />
              </a>
            </div>
            )}  
          </nav>
        </Content>
      </Container>
    </Navigation>
  );
}

import { Content, Container, Navigation, NewLink } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { PiReceipt } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { useAuth } from "../../hooks/auth";
import { Button } from "../Button";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Navbar({ id, setSearch, search, ...rest }) {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();
  const isAdmin = user.isAdmin;

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  return (
    <Navigation>
      <Container {...rest} id={id}>
        <Content>
          <nav className="desktop">
            {isAdmin ? (
              <div>
                <img src="/src/assets/Polygon1.svg" alt="polygon" />
                <h1 className="logoName">food explorer</h1>
                <p className="admin">admin</p>
              </div>
            ) : (
              <div>
                <img src="/src/assets/Polygon1.svg" alt="polygon" />
                <h1 className="logoName">food explorer</h1>
              </div>
            )}

            <Input
              className="inputNavbar"
              icon={BiSearch}
              value={search}
              placeholder="Busque por pratos ou ingredientes"
              onChange={(e) => setSearch(e.target.value)}
            />

            {isAdmin ? (
              <NewLink to="/NewPlate">
                <Button title="Novo Prato" />
              </NewLink>
            ) : (
              <Button icon={<PiReceipt />} title="Pedidos (0)" />
            )}

            <Link onClick={handleSignOut} className="ButtonSignOut">
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
            ) : (
              <div className="mobile-menu">
                <Link to="/Menu">
                  <AiOutlineMenu />
                </Link>
              </div>
            )}

            {isAdmin ? (
              <div className="logo">
                <img src="/src/assets/Polygon1.svg" alt="polygon" />
                <h1>food explorer</h1>
                <p className="admin">admin</p>
              </div>
            ) : (
              <div className="logo">
                <img src="/src/assets/Polygon1.svg" alt="polygon" />
                <h1>food explorer</h1>
              </div>
            )}

            {isAdmin ? (
              <div></div>
            ) : (
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

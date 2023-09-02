import { Container } from "./styles";
import { FiHeart } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ButtonInclude } from "../ButtonInclude";

export function Card({ title, description, value, img, ...rest }) {
  return (
    <Container>
      <a href="/">
        <FiHeart className="Favorite" />
      </a>
      <div>
        <img src={img} alt="ravanello" />

        <h3>{title}</h3>

        <p>{description}</p>

        <h2>{value}</h2>

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
            <ButtonInclude title="incluir" />
        </div>
      </div>
    </Container>
  );
}

import { Container } from "./styles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { PiPencilSimple } from "react-icons/pi";

export function CardsAdmin({ title, description, value, img, ...rest }) {
  return (
    <Container>
      <a href="/">
        <PiPencilSimple className="Edit" />
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
        </div>
      </div>
    </Container>
  );
}

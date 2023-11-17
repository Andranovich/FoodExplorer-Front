import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonInclude } from "../../components/ButtonInclude";
import { Amount } from "../../components/Amount";
import { PiReceipt } from "react-icons/pi";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";

const initialPlate = {
  id: 0,
  title: "",
  description: "",
  category: "",
  price: "",
  image: "",
  ingredients: [],
};

export function Plate() {
  const { user } = useAuth();
  const isAdmin = user.isAdmin;
  const [value, setValue] = useState(1);
  const [plate, setPlate] = useState(initialPlate);
  const params = useParams();

  const getPlate = async () => {
    try {
      const response = await api.get(`/dishes/${params.id}`);

      if (response.status === 201) {
        setPlate(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlate();
  }, []);

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
                src={`https://food-explorer-api-qvmx.onrender.com/image/${plate.image}`}
                alt={plate.title}
              />
              <div className="dishInfo">
                <h1>{plate.title}</h1>
                <p>{plate.description}</p>
                <div className="tags">
                  {plate.ingredients.map((ingredient) => {
                    return <span>{ingredient.name}</span>;
                  })}
                </div>
                <div className="amount">
                  <Link to={`/Plate/${params.id}/Edit`}>
                    <ButtonInclude
                      className="buttonDesktop "
                      title="Editar prato"
                    />
                  </Link>

                  <Button className="buttonMobile" title="Editar prato" />
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
                src={`https://food-explorer-api-qvmx.onrender.com/image/${plate.image}`}
                alt="Food"
              />
              <div className="dishInfo">
                <h1>{plate.title}</h1>
                <p>{plate.description}</p>
                <div className="tags">
                  {plate.ingredients.map((ingredient) => {
                    return <span>{ingredient.name}</span>;
                  })}
                </div>
                <div className="amount">
                  <div className="counter">
                    {!isAdmin && <Amount value={value} setValue={setValue} />}
                  </div>
                  <ButtonInclude
                    className="buttonDesktop"
                    title={`incluir ∙ R$ ${plate.price}`}
                  />
                  <Button
                    className="buttonMobile"
                    icon={<PiReceipt />}
                    title={`pedir ∙ R$ ${plate.price}`}
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

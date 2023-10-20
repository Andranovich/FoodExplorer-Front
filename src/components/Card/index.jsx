import {
  Container,
  Favorite,
  Edit,
  ImageProduct,
  Title,
  Description,
  Price,
} from "./styles";
import { FiHeart } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ButtonInclude } from "../ButtonInclude";
import HeartIcon from "../../assets/imagens/heart.svg";
import FavoriteIcon from "../../assets/imagens/isFavorite.svg";
import EditIcon from "../../assets/imagens/pencil.svg";
import CaretRightIcon from "../../assets/imagens/caretRight.svg";
import { Button } from "../Button";
import { Amount } from "../Amount";

import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";

export function Card({
  id,
  title,
  description,
  image,
  price,
  onClick,
  src,
  to,
  ...rest
}) {
  const [value, setValue] = useState(1);
  const [favorited, setFavorited] = useState(false);
  const { user } = useAuth();
  const isAdmin = user.isAdmin;

  const handleFavorite = () => {
    const newFavorited = !favorited;
    setFavorited(newFavorited);

    if (newFavorited) {
      localStorage.setItem(`favorite_${id}`, "true");
    } else {
      localStorage.removeItem(`favorite_${id}`);
    }
  };

  useEffect(() => {
    const isFavorited = localStorage.getItem(`favorite_${id}`);
    if (isFavorited) {
      setFavorited(true);
    }
  }, [id]);

  return (
    // <Container {...rest} id={id}>
    //   {!isAdmin ?
    //   <ComonUser>
    //     <a onClick={handleFavorite}>
    //       <FiHeart className="Favorite" />
    //     </a>
    //     <div>
    //     <img src={img} alt="ravanello" />

    //     <h3>{title}</h3>

    //     <p>{description}</p>

    //     <h2>{value}</h2>

    //     <div className="amount">
    //       <div className="counter">
    //         <a href="/">
    //           <AiOutlineMinus />
    //         </a>
    //         <h4>01</h4>
    //         <a href="/">
    //           <AiOutlinePlus />
    //         </a>
    //       </div>
    //         <ButtonInclude title="incluir" />
    //     </div>
    //     </div>
    //   </ComonUser>
    //     :
    //   <AdminUser>
    //     <a href="/">
    //     <FiHeart className="Favorite" />
    //   </a>
    //   <div>
    //     <img src={img} alt="ravanello" />

    //     <h3>{title}</h3>

    //     <p>{description}</p>

    //     <h2>{value}</h2>

    //     <div className="amount">
    //       <div className="counter">
    //         <a href="/">
    //           <AiOutlineMinus />
    //         </a>
    //         <h4>01</h4>
    //         <a href="/">
    //           <AiOutlinePlus />
    //         </a>
    //       </div>
    //         <ButtonInclude title="incluir" />
    //     </div>
    //   </div>
    //   </AdminUser>
    //   }
    //   <a href="/">
    //     <FiHeart className="Favorite" />
    //   </a>
    //   <div>
    //     <img src={img} alt="ravanello" />

    //     <h3>{title}</h3>

    //     <p>{description}</p>

    //     <h2>{value}</h2>

    //     <div className="amount">
    //       <div className="counter">
    //         <a href="/">
    //           <AiOutlineMinus />
    //         </a>
    //         <h4>01</h4>
    //         <a href="/">
    //           <AiOutlinePlus />
    //         </a>
    //       </div>
    //         <ButtonInclude title="incluir" />
    //     </div>
    //   </div>
    // </Container>

    <Container {...rest} id={id}>
      {!isAdmin ? (
        <Favorite onClick={handleFavorite}>
          <img
            className="favorite"
            src={favorited ? FavoriteIcon : HeartIcon}
            alt="Imagem para favoritar o produto"
          />
        </Favorite>
      ) : (
        <Edit onClick={onClick}>
          <img src={EditIcon} alt="Icone para editar o produto" />
        </Edit>
      )}

      <ImageProduct isAdmin={isAdmin}>
        <img src={`http://localhost:3333/image/${image}`} alt="Expresso" />
        {/* <img src={src} alt={`Imagem do produto ${title}`} /> */}
      </ImageProduct>

      <Title to={to}>{title}</Title>

      <Description>{description}</Description>

      <Price>{`R$ ${price}`}</Price>

      <div className="Buttons">
        {!isAdmin && <Amount value={value} setValue={setValue} />}

        {!isAdmin && (
          <Button type={"submit"} title={"Incluir"} className={"Include"} />
        )}
      </div>
    </Container>
  );
}

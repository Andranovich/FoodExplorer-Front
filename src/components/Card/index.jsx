import {
  Container,
  Favorite,
  Edit,
  ImageProduct,
  Title,
  Description,
  Price,
} from "./styles";
import HeartIcon from "/heart.svg";
import FavoriteIcon from "/isFavorite.svg";
import EditIcon from "/pencil.svg";
import { Button } from "../Button";
import { Amount } from "../Amount";
import { Link } from "react-router-dom";

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
          <Link to={`/Plate/${id}/Edit`}>
            <img 
              src={EditIcon} 
              alt="Icone para editar o produto" />
          </Link>
        </Edit>
      )}

      <ImageProduct isAdmin={isAdmin}>
        <img src={`https://food-explorer-api-qvmx.onrender.com/image/${image}`} alt='' />
      </ImageProduct>

      <Title to={`Plate/${id}`}>{title}</Title>

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

import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { PiCaretLeft } from "react-icons/pi";
import { PiUploadSimpleBold } from "react-icons/pi";
import { NoteItem } from "../../components/NoteItem";
import { Footer } from "../../components/Footer";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialPlate = {
  id: 0,
  title: "",
  description: "",
  category: "",
  price: "",
  image: "",
  ingredients: [],
};

export function EditPlate() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  const [plate, setPlate] = useState(initialPlate);

  function handleAddIngredient() {
    setIngredients((prevState) => [
      ...prevState,
      { name: newIngredient, id: ingredients.length + 1 },
    ]);
    setPlate({
      ...plate,
      ingredients: [...plate.ingredients, { name: newIngredient }],
    });

    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setPlate((prevState) => {
      console.log(
        prevState.ingredients.filter((ingredient) => ingredient !== deleted)
      );
      return {
        ...plate,
        ingredients: prevState.ingredients.filter(
          (ingredient) => ingredient !== deleted
        ),
      };
    });
  }

  async function handleEditPlate() {
    if (!plate.title || !plate.price || !plate.description) {
      return alert("Preencha todos os campos!");
    }
    console.log(plate.image);
    if (ingredients.length < 1) {
      return alert("Adicione no mínimo 1 ingrediente!");
    } else {
      const formData = new FormData();
      formData.append("image", plate.image);
      formData.append("title", plate.title);
      formData.append("description", plate.description);
      formData.append("price", plate.price);
      formData.append("ingredients", JSON.stringify(plate.ingredients));

      console.log(ingredients);

      const response = await api.put(`/dishes/${params.id}`, formData);

      navigate("/");
    }
  }

  async function handleRemovePlate() {
    const isConfirm = confirm("Tem certeza que deseja remover?");

    if (isConfirm) {
      await api.delete(`/dishes/${params.id}`);
      navigate(-1);
    }
  }

  const getPlate = async () => {
    try {
      const response = await api.get(`/dishes/${params.id}`);

      if (response.status === 201) {
        setPlate(response.data);
        setIngredients(response.data.ingredients);
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
        <a href="/">
          <PiCaretLeft fontSize={32} />
          voltar
        </a>

        <h1>Editar prato</h1>

        <div className="grid3">
          <h2>Imagem do prato</h2>

          <div>
            <label class="file">
              <PiUploadSimpleBold />

              <input
                type="file"
                placeholder="Selecione imagem"
                onChange={(e) => {
                  setPlate(() => {
                    return { ...plate, image: e.target.files[0] };
                  });
                }}
              />
              <span class="file-custom">Selecione imagem</span>
            </label>
          </div>
        </div>

        <div className="grid4">
          <h2>Nome</h2>
          <input
            type="text"
            placeholder="Nome do prato"
            onChange={(e) => setPlate({ ...plate, title: e.target.value })}
            value={plate.title}
          />
        </div>

        <div className="grid5">
          <h2>Categoria</h2>
          <select
            name="select"
            value={plate.category}
            onChange={(e) => {
              setPlate({ ...plate, category: e.target.value });
            }}
          >
            <option value="Refeições">Refeições</option>
            <option value="Sobremesas">Sobremesas</option>
            <option value="Bebidas">Bebidas</option>
          </select>
        </div>

        <div className="grid6">
          <h2>Ingredientes</h2>

          <section className="ingredients">
            {plate.ingredients.map((ingredient, index) => {
              return (
                <NoteItem
                  className="note"
                  key={String(index)}
                  value={ingredient.name}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              );
            })}
            <NoteItem
              isNew
              className="note"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              onClick={handleAddIngredient}
            />
          </section>
        </div>

        <div className="grid7">
          <h2>Preço</h2>
          <input
            type="text"
            placeholder="R$ 00,00"
            onChange={(e) => setPlate({ ...plate, price: e.target.value })}
            value={plate.price}
          />
        </div>

        <div className="grid8">
          <h2>Descrição</h2>
          <textarea
            name=""
            id=""
            cols=""
            rows="8"
            placeholder="descrição"
            onChange={(e) =>
              setPlate({ ...plate, description: e.target.value })
            }
            defaultValue={description}
            value={plate.description}
          ></textarea>
        </div>

        <div className="buttons">
          <Button
            className="delete"
            title="Excluir pratos"
            onClick={handleRemovePlate}
          />

          <Button
            className="save"
            title="Salvar alterações"
            onClick={handleEditPlate}
          />
        </div>
      </Container>
      <Footer />
    </main>
  );
}

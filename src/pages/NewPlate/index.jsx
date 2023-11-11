import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { PiCaretLeft } from "react-icons/pi";
import { PiUploadSimpleBold } from "react-icons/pi";
import { NoteItem } from "../../components/NoteItem";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function NewPlate() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleAddIngredient() {
    setIngredients((prevState) => [
      ...prevState,
      { name: newIngredient, id: ingredients.length + 1 },
    ]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
    setNewIngredient("");
  }

  async function handleNewPlate() {
    if (!title || !price || !description) {
      return alert("Favor preecha todos os campos!");
    }

    if (ingredients.length < 1) {
      return alert("Adicione no mínimo 1 ingrediente!");
    } else {
      const formData = new FormData();
      formData.append("image", imageFile[0]);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);
      formData.append(
        "ingredients",
        JSON.stringify(ingredients.map((ingredient) => ingredient.name))
      );

      console.log(imageFile);

      await api
        .post("/dishes", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(alert("Prato criado com sucesso!"))
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Erro ao criar prato");
          }
        });

      navigate(-1);
    }
  }

  return (
    <main>
      <Navbar />
      <Container>
        <a href="/">
          <PiCaretLeft fontSize={32} />
          voltar
        </a>

        <h1>Adicionar prato</h1>

        <div className="grid3">
          <h2>Imagem do prato</h2>

          <div>
            <label class="file">
              <PiUploadSimpleBold />
              <input type="file" placeholder="Selecione imagem"
                  onChange={(e) => {
                    setImageFile(() => e.target.files);
                    console.log(e.target.files);
                  }}
              />
              <span class="file-custom">Selecione imagem</span>
            </label>
          </div>

          {/* <a
            className="imageButton"
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
          >
            
            <p>Selecione imagem</p>
          </a> */}
        </div>

        <div className="grid4">
          <h2>Nome</h2>
          <input
            type="text"
            placeholder="Ex.: Salada César"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid5">
          <h2>Categoria</h2>
          <select name="select" onChange={(e) => setCategory(e.target.value)}>
            <option value="Refeições">Refeições</option>
            <option value="Sobremesas">Sobremesas</option>
            <option value="Bebidas">Bebidas</option>
          </select>
        </div>

        <div className="grid6">
          <h2>Ingredientes</h2>

          <section className="ingredients">
            {ingredients.map((ingredient, index) => {
              return (
                <NoteItem
                  className="note"
                  key={String(index)}
                  onChange={(e) => setNewIngredient(e.target.value)}
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
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="grid8">
          <h2>Descrição</h2>
          <textarea
            name=""
            id=""
            cols=""
            rows="8"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="buttons">
          <Button
            className="save"
            title="Salvar alterações"
            onClick={handleNewPlate}
          />
        </div>
      </Container>
      <Footer />
    </main>
  );
}

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

  const params = useParams();
  const [plate, setPlate] = useState(initialPlate);


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
        <a href="/">
          <PiCaretLeft fontSize={32} />
          voltar
        </a>

        <h1>Editar prato</h1>

        <a className="grid3">
          <h2>Imagem do prato</h2>
          <div className="imageButton">
            <PiUploadSimpleBold />
            <p>Selecione imagem</p>
          </div>
        </a>

        <div className="grid4">
          <h2>Nome</h2>
          <input type="text" placeholder="Nome do prato" onChange={(e) => {
            setPlate({...plate, title: e.target.value});
          }} value={plate.title}/>
        </div>

        <div className="grid5">
          <h2>Categoria</h2>
          <select name="select" value={plate.category} onChange={(e) => {
            setPlate({...plate, category: e.target.value});
          }} 
          >
            <option value="Refeições">Refeições</option>
            <option value="Sobremesas">
              Sobremesas
            </option>
            <option value="Bebidas">Bebidas</option>
          </select>
        </div>

        <div className="grid6">
          <h2>Ingredientes</h2>
          <section  className="ingredients">{plate.ingredients.map((ingredient) => {
            return (
              <NoteItem className="note" value={ingredient.name} />
              )
            })}
            <NoteItem className="note" isNew />
          </section>
        </div>

        <div className="grid7">
          <h2>Preço</h2>
          <input type="text" placeholder={`R$ ${plate.price}`} onChange={(e) => {
            setPlate({...plate, price: e.target.value});
          }} value={plate.price}/>
        </div>

        <div className="grid8">
          <h2>Descrição</h2>
          <textarea
            name=""
            id=""
            cols=""
            rows="8"
            placeholder="descrição" onChange={(e) => {
              setPlate({...plate, description: e.target.value});
            }} value={plate.description}></textarea>
        </div>

        <div className="buttons">
          <Button className="delete" title="Excluir pratos" />
          <Button className="save" title="Salvar alterações" />
        </div>
      </Container>
      <Footer />
    </main>
  );
}

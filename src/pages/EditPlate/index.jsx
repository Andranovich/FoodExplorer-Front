import { Container, Footer } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { PiCaretLeft } from "react-icons/pi";
import { PiUploadSimpleBold } from "react-icons/pi";
import { NoteItem } from "../../components/NoteItem";

export function EditPlate() {
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
          <input type="text" placeholder="Salada César" />
        </div>

        <div className="grid5">
          <h2>Categoria</h2>
          <select name="select">
            <option value="Refeições">Refeições</option>
            <option value="Sobremesas" selected>
              Sobremesas
            </option>
            <option value="Bebidas">Bebidas</option>
          </select>
        </div>

        <div className="grid6">
          <h2>Ingredientes</h2>
          <section className="ingredients">
            <NoteItem value="Pão naan" />
            <NoteItem isNew />
          </section>
        </div>

        <div className="grid7">
          <h2>Preço</h2>
          <input type="text" placeholder="R$ 42,00" />
        </div>

        <div className="grid8">
          <h2>Descrição</h2>
          <textarea
            name=""
            id=""
            cols=""
            rows="8"
            placeholder="A Salada César é uma opção refrescante para o verão."
          ></textarea>
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

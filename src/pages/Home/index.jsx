import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";
import { HomeBanner } from "../../components/HomeBanner";
import { Footer } from "../../components/Footer";
import { HomeCards } from "../../components/Carrousel";
import { HomeDesserts } from "../../components/HomeDesserts";
import { HomeDrinks } from "../../components/HomeDrinks";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import axios from "axios";


export function Home() {
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);
  let typeDishes;

  async function getDishes() {
    const response = await axios.get("/dishes?category=Refeições", {headers:{Authorization: 'Bearer ' + localStorage.getItem("token")}});
   
    if (response.status === 200) {
      setDishes(response.data);
    }
  }  

  useEffect(() => {
    getDishes();
  }, []);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(
        `/dishes?search=${search}`
      );

      setDishes(response.data);
      console.log(response.data);
    }
    fetchDishes();
  }, [search]);

  

  return (
    <main>
      <Navbar setSearch={setSearch} search={search} />
      <Container>
        <HomeBanner />
        <HomeCards data={dishes.filter((item) => item.category === 'Refeições' )}/>
        <HomeDesserts data={dishes.filter((item) => item.category === 'Sobremesas' )} />
        <HomeDrinks data={dishes.filter((item) => item.category === 'Bebidas' )}/>
      </Container>
      <Footer />
    </main>
  );
}

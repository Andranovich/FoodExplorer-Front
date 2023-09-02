import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";
import { HomeBanner } from "../../components/HomeBanner";
import { Footer } from "../../components/Footer";
import { HomeCards } from "../../components/HomeCards";
import { HomeDesserts } from "../../components/HomeDesserts";
import { HomeDrinks } from "../../components/HomeDrinks";

export function Home() {
  return (
    <main>
      <Navbar />
        <Container>
        <HomeBanner />
        <HomeCards />
        <HomeDesserts />
        <HomeDrinks />
        </Container>
      <Footer />
    </main>
  );
}

import { Container } from "./styles";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { HomeBanner } from "../../components/HomeBanner";
import { Footer } from "../../components/Footer";
import { HomeCardsAdmin } from "../../components/HomeCardsAdmin";
import { HomeDessertsAdmin } from "../../components/HomeDessertsAdmin";
import { HomeDrinksAdmin } from "../../components/HomeDrinksAdmin";

export function HomeAdmin() {
  return (
    <Container>
      <NavbarAdmin />
      <HomeBanner />
      <HomeCardsAdmin />
      <HomeDessertsAdmin />
      <HomeDrinksAdmin />
      <Footer />
    </Container>
  );
}

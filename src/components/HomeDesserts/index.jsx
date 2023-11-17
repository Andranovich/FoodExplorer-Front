import { Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Container, Slide } from "./styles";
import { Card } from "../../components/Card";


export function HomeDesserts({data}) {


  return (
    <Container>
      <h1>Sobremesas</h1>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={"auto"}
          navigation
        >
          {data.map((item) => {
            console.log(item);
            return (
              <Slide key={item.id}>
                <Card
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  id={item.id}
                />
              </Slide>
            );
          })}
        </Swiper>

      </div>
      
    </Container>
    
  );
}
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Container } from "./styles";
import { Card } from "../../components/Card";
import "swiper/css";
import "swiper/css/pagination";



export function HomeDesserts({data}) {


  return (
    <Container>
      <h1>Sobremesas</h1>
      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={"auto"}
          navigation
        >
          {data.map((item) => {
            console.log(item);
            return (
              <SwiperSlide style={{width: "304px"}} key={item.id}>
                <Card
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  id={item.id}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
      
    </Container>
    
  );
}
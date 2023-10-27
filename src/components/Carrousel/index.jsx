import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useState, useEffect } from "react";
import { Container } from "./styles";
import { Card } from "../Card";
 


export function HomeCards({data}) {
  const [slidePerView, setSlidePerView] = useState(3.5);


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        setSlidePerView(3);
      } else {
        setSlidePerView(3.5);
      }

      if (window.innerWidth < 700) {
        setSlidePerView(2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <h1>Refeições</h1>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={slidePerView}
          navigation
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Card
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
}

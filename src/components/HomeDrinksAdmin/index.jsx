import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useState, useEffect } from "react";
import { Container } from "./styles";
import { CardsAdmin } from "../../components/CardsAdmin";
import img9 from "../../assets/imagens/Expresso.svg";
import img10 from "../../assets/imagens/Maracuja.svg";
import img11 from "../../assets/imagens/Autunno.svg";

export function HomeDrinksAdmin() {
  const [slidePerView, setSlidePerView] = useState(3.5);

  const content = [
    {
      id: 9,
      img: img9,
      title: "Espresso >",
      description:
        "Café cremoso feito na temperatura e pressões perfeitas.",
      value: "R$ 15,97",
    },

    {
      id: 10,
      img: img10,
      title: "Suco de maracujá >",
      description:
        "Suco de maracujá gelado, cremoso, docinho.",
      value: "R$ 13,97",
    },

    {
      id: 11,
      img: img11,
      title: "Tè d'autunno >",
      description:
        "Chá de anis, canela e limão. Sinta o outono italiano.",
      value: "R$ 19,97",
    },

    {
      id: 12,
      img: img11,
      title: "Pomo bourbon  >",
      description:
        "Maçã, whisky, canela. On the rocks.",
      value: "R$ 79,97",
    },
  ];

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
      <h1>Sobremesas</h1>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={slidePerView}
          navigation
        >
          {content.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <CardsAdmin
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  value={item.value}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
      
    </Container>
    
  );
}
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useState, useEffect } from "react";
import { Container } from "./styles";
import { CardsAdmin } from "../../components/CardsAdmin";
import img1 from "../../assets/imagens/DishRavanello.svg";
import img2 from "../../assets/imagens/DishGambe.svg";
import img3 from "../../assets/imagens/parma.svg";
import img4 from "../../assets/imagens/Molla.svg";

export function HomeCardsAdmin() {
  const [slidePerView, setSlidePerView] = useState(3.5);

  const content = [
    {
      id: 1,
      img: img1,
      title: "Salada Ravanello >",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      value: "R$ 49,97",
    },

    {
      id: 2,
      img: img2,
      title: "Salada Ravanello >",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      value: "R$ 49,97",
    },

    {
      id: 3,
      img: img3,
      title: "Salada Ravanello >",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      value: "R$ 49,97",
    },

    {
      id: 4,
      img: img4,
      title: "Salada Ravanello >",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      value: "R$ 49,97",
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
      <h1>Refeições</h1>
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

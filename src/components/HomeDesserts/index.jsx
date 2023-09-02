import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useState, useEffect } from "react";
import { Container } from "./styles";
import { Card } from "../../components/Card";
import img5 from "../../assets/imagens/PrugnaPie.svg";
import img6 from "../../assets/imagens/Peachy.svg";
import img7 from "../../assets/imagens/Macarons.svg";

export function HomeDesserts() {
  const [slidePerView, setSlidePerView] = useState(3.5);

  const content = [
    {
      id: 5,
      img: img5,
      title: "Prugna Pie >",
      description:
        "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
      value: "R$ 79,97",
    },

    {
      id: 6,
      img: img6,
      title: "Peachy pastrie >",
      description:
        "Delicioso folheado de pêssego com folhas de hortelã.",
      value: "R$ 32,97",
    },

    {
      id: 7,
      img: img7,
      title: "Macarons  >",
      description:
        "Farinha de amêndoas, manteiga, claras e açúcar.",
      value: "R$ 79,97",
    },

    {
      id: 8,
      img: img7,
      title: "Bolo de damasco  >",
      description:
        "Damascos frescos em uma massa sem glúten.",
      value: "R$ 19,97",
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
                <Card
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
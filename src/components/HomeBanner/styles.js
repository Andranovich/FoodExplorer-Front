import styled from "styled-components";

export const Container = styled.div`
  background: var(
    --gradients-200,
    linear-gradient(180deg, #091e26 0%, #00131c 100%)
  );

  margin: 164px 124px 62px 124px;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  position: relative;

  height: 260px;

  @media (max-width: 1300px) {
    height: 200px;
    margin: 164px 90px 62px;
  }

  @media (max-width: 1000px) {
    margin: 44px 30px 62px;
  
  }

  @media (max-width: 700px) {
    height: 120px;
  }

  > div {
    margin-top: 88px;

    margin-bottom: 92px;
    margin-right: 60px;
    width: 422px;

    
    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;

      @media (max-width: 1300px) {
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 25.2px */
      }

      @media (max-width: 1200px) {
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 25.2px */
      }

      @media (max-width: 700px) {
        font-size: 18px;
      }
    }

    p {
      font-family: "Roboto Slab", serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;

      @media (max-width: 1300px) {
        font-size: 12.5px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 16.8px */
      }

      @media (max-width: 1200px) {
        width: 300px;
        font-size: 12px;
        margin-right: -45px;
      }

      @media (max-width: 700px) {
        width: 202px;
      }


    }

    img {
      position: absolute;
      top: -145px;
      left: -90px;
      margin-left: 30px;
      margin-bottom: 30px;
      width: 632px;
      height: 406px;

      @media (max-width: 1300px) {
        width: 480px;
        height: 306px;
        top: -105px;
        left: -75px;
      }

      @media (max-width: 1000px) {
        width: 320px;
        height: 220px;
        top: -20px;
      }

      @media (max-width: 700px) {
        width: 191px;
        height: 149px;
        top: -30px;
        left: -55px;
      }
    }

    .slogan {
      display: flex;
      flex-direction: column;
      position: absolute;
      align-items: start;
      right: 100px;

      @media (max-width: 1300px) {
        top: 70px;
      }

      @media (max-width: 700px) {
        margin-top: -40px;
        margin-right: -20px;
      }

      @media (max-width: 530px) {
        margin-right: -85px;
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  margin: 0 124px 62px 124px;
  

  @media (max-width: 1300px) {
    margin: 0 90px 24px;
  }

  @media (max-width: 1000px) {
    margin: 0 30px 24px;
  }
  
  > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    @media (max-width: 700px) {
      font-size: 18px;
    }
  }

  
`;
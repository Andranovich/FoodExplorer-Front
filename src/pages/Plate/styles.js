import styled from "styled-components";
import { Footer as FooterComponent } from "../../components/Footer";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  max-height: 830px;
  margin: 0 auto;
  display: flex;
  
  position: relative;

  > a {
    display: flex;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 33.6px;
    color: white;
    margin-top: 24px;
    margin-left: 122px;
  }

  .dish {
    display: flex;
    max-height: 830px;

    gap: 48px;
    margin: 142px 121px;
    margin-top: 142px;
    margin-left: 121px;
    position: absolute;

    > img {
      width: 390px;
      height: 390px;
    }
  }

  .dishInfo {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 45px;
    font-family: "Poppins", sans-serif;


    h1 {
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: 56px;
    }

    p {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 33.6px;
    }
  }

  .tags {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    flex-direction: row;
    gap: 12px;

    span {
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      padding: 4px 8px;
      border-radius: 5px;
    }
  }

  .amount {   
    display: flex;
    flex-direction: row;
    padding-top: 48px;
    align-items: center;
    max-width: 350px;
    margin-left: 0;
    gap: 33px;


    > button {
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; 
    }
  }

  .counter {  
    display: flex;
    gap: 14px;
    width: 100%;
    align-items: center;
    justify-content: center;

    > h4 {
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;

      
    }

    > a {
      color: white;
      font-size: 24px;
      display: flex;
    }
  }
`;

export const Footer = styled(FooterComponent)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

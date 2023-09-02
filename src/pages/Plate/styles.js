import styled from "styled-components";
import { Footer as FooterComponent } from "../../components/Footer";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
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
`;

export const Footer = styled(FooterComponent)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

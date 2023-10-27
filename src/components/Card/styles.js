import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  padding: 24px;

  @media (max-width: 1200px) {
    min-width: 240px;
  }

  @media (max-width: 800px) {
    min-width: 210px;
    min-height: 292px;
  }

  .Buttons {
    display: flex;
    flex-direction: row;

    @media (max-width: 1400px) {
      display: flex;
      flex-direction: column;
    }
  }

  > a {
    right: 16px;
    top: 16px;
    font-size: 24px;
    color: white;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 15px;

    @media (max-width: 1100px) {
      display: flex;
      gap: 12px;
    }

    > img {
      width: 176px;
      height: 176px;

      @media (max-width: 800px) {
        width: 88px;
        height: 88px;
      }
    }

    h3 {
      color: ${({ theme }) => theme.COLORS.WHITE_300};
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 33.6px;

      @media (max-width: 800px) {
        font-size: 14px;
      }
    }

    p {
      color: ${({ theme }) => theme.COLORS.WHITE_400};
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 22.4px;

      @media (max-width: 800px) {
      }
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-family: "Roboto", sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 51.2px; /* 51.2px*/

      @media (max-width: 800px) {
        font-size: 16px;
        line-height: 16px;
      }
    }
  }

  .amount {
    display: flex;
    flex-direction: row;
    gap: 14px;
    align-items: center;
    text-align: center;
    justify-content: center;

    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
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

      @media (max-width: 800px) {
        font-size: 16px;
      }
    }

    > a {
      color: white;
      font-size: 24px;
      display: flex;
    }
  }
`;

export const Favorite = styled.div`
  width: 22px;
  height: 22px;
  position: absolute;
  right: 18px;
  top: 16px;

  .favorite {
    height: 24px;
    height: 24px;
  }
`;

export const Edit = styled.button`
  width: 22px;
  height: 22px;
  position: absolute;
  right: 18px;
  top: 16px;
  background-color: transparent;
  border: none;  
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.COLORS.BLUE_100};

  span {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    margin-left: 0.5rem;
  }
`;
export const ImageProduct = styled.div`
  border-radius: 50%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  img {
    width: 6.4px;
    height: 22.4px;
    text-align: center;
    margin-left: 16px;
  }

  @media (min-width: 900px) {
    font-size: 2.2rem;
    line-height: 3.3rem;

    img {
      width: 0.6rem;
    }
  }
`;

export const Description = styled.p`
  width: 100%;
  height: 48px;
  overflow: hidden;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.COLORS.WHITE_400};

  @media (max-width: 900px) {
    display: none;
  }
`;

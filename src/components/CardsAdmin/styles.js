import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  position: relative;

  @media (max-width: 1200px) {
    min-width: 240px;
  }

  @media (max-width: 800px) {
    min-width: 210px;
    min-height: 292px;
  }

  > a {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 24px;
    color: white;
  }

  > div {
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;

    @media (max-width: 1100px) {
      display: flex;
      gap: 12px;
    }

    img {
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
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22.4px;

      @media (max-width: 800px) {
        display: none;
      }
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-family: "Roboto", sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 51.2px; /* 51.2px */

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

import styled from "styled-components";

export const Container = styled.div`

  max-width: 1440px;
  min-height: 740px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    justify-content: center;
    max-height: 720px;
  }

   .backArrow {
    display: flex;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 33.6px;
    color: white;
    margin-top: 32px;
    margin-left: 122px;

    @media (max-width: 1100px) {
      display: flex;
      left: 0;
      margin-left: 56px;
    }
  }

  .dish {
    display: flex;
    max-height: 800px;

    gap: 48px;
    margin-top: 108px;
    margin-left: 141px;
    margin-right: 141px;
    position: relative;

    @media (max-width: 1100px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      margin-top: 0px;
    }

    > img {
      width: 390px;
      height: 390px;

      @media (max-width: 1100px) {
        width: 264px;
        height: 264px;
      }
    }
  }

  .dishInfo {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 45px;
    font-family: "Poppins", sans-serif;

    @media (max-width: 1100px) {
      margin-top: 0px;
      align-items: center;
      max-width: 316px;
    }

    h1 {
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: 56px;

      @media (max-width: 1100px) {
        font-size: 27px;
        font-style: normal;
        line-height: 140%;
      }
    }

    p {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 33.6px;

      @media (max-width: 1100px) {
        text-align: center;
        font-size: 16px;
        font-style: normal;
        line-height: 140%;
      }
    }
  }

  .tags {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;

    @media (max-width: 1100px) {
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      display: flex;
      justify-content: center;
      gap: 24px;
    }

    span {
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      padding: 4px 8px;
      border-radius: 5px;

      @media (max-width: 1100px) {
        display: flex;
        align-items: center;
      }
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

    @media (max-width: 1100px) {
      gap: 16px;
      padding-top: 0;
    }

    .buttonDesktop {
      height: 48px;
      width: 131px;
      padding: 0;

      @media (max-width: 1100px) {
        display: none;
      }
    }

    .buttonMobile {

      padding: 0;


      @media (min-width: 1100px) {
        display: none;
      }
      
    }

    > button {
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;

      @media (max-width: 1100px) {
        height: 37px;
        width: 180px;
        text-align: center;
        font-size: 9.5px;
        line-height: 16px;
      }
    }
  }

  .counter {
    display: flex;
    gap: 14px;
    align-items: start;

    @media (max-width: 1100px) {
      width: auto;
    }

    > h4 {
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;

      @media (max-width: 1100px) {
        font-size: 22px;
        font-style: normal;
        line-height: 160%;
      }
    }

    > a {
      color: white;
      font-size: 24px;
      display: flex;
    }
  }

  /* Button {
    width: auto;
    height: 48px;


  } */
`;



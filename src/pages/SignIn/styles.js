import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  align-items: center;
  padding: 90px 108px 112px 153px;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    height: auto;
  }

  h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    @media (max-width: 1100px) {
      font-size: 37px;
      font-weight: 700;
      line-height: normal;
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE_400};
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;

    @media (max-width: 1100px) {
      width: 348px;
      align-items: center;
      justify-content: start;
      margin-top: 158px;
      margin-bottom: 70px;
    }

    img {
      width: 47px;

      @media (max-width: 1100px) {
        width: 43px;
      }
    }
  }

  > h1,
  a,
  button {
    font-family: "Poppins", sans-serif;
  }

  > a,
  button {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;

export const Form = styled.form`
  padding: 64px;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  text-align: center;
  border-radius: 15px;

  @media (max-width: 1100px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    padding-top: 0;
  }

  h1 {
    @media (max-width: 1100px) {
      display: none;
    }
  }

  > .formInput p {
    text-align: start;
    padding-bottom: 8px;
  }

  > .formInput input {
    width: 348px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  > button {
    @media (max-width: 1100px) {
      height: 48px;
    }
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
`;

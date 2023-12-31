import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 10px 32px 53px;

  @media (min-width: 800px) {
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 116px;
    padding-left: 123px;
    padding-right: 123px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    gap: 32px;
  }

  svg {
    font-size: 22px;
  }

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    font-family: "Poppins", sans-serif;
    font-size: 16.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    @media (min-width: 800px) {
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      grid-area: 1 / 1 / 2 / 6;
    }
  }

  .grid3 {
    display: flex;
    flex-direction: column;

    div {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      display: flex;
      width: auto;
      align-items: center;
      position: relative;
      border-radius: 5px;
      height: 48px;
      border-style: none;
      padding-left: 14px;
      color: #ffffff;
      flex-wrap: wrap;

      > label {
        width: 100%;
        height: 48px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }
    }

    input[type="file"] {
      display: none;
    }

    svg {
      margin: auto 0;
    }
  }

  .grid4 {
    > input {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  h1 {
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE_300};

    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    @media (min-width: 800px) {
      grid-area: 2 / 1 / 3 / 3;
    }
  }

  .grid7 {
    grid-area: 4 / 5 / 5 / 6;

    > input {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  @media (min-width: 800px) {
    .grid3 {
      grid-area: 3 / 1 / 4 / 2;
    }

    .grid4 {
      grid-area: 3 / 2 / 4 / 4;

      > input {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }

    .grid5 {
      grid-area: 3 / 4 / 4 / 6;
    }

    .grid6 {
      grid-area: 4 / 1 / 5 / 5;
    }

    .grid7 {
      grid-area: 4 / 5 / 5 / 6;

      > input {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }

    .grid8 {
      grid-area: 5 / 1 / 6 / 6;
    }

    .grid9 {
    }
  }

  h2 {
    width: 100%;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE_400};
    margin-bottom: 16px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }

  input {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    height: 48px;
    border-style: none;
    padding-left: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  select {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.WHITE_400};
    width: 100%;
    height: 48px;
    border-radius: 5px;
    border-style: none;
    padding: 16px;
  }

  input::-webkit-input-placeholder {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE_500};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  .imageButton {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    padding: 12px 20px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    height: 48px;
    gap: 8px;
    border-style: none;
  }

  section {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    border-style: none;
    height: 48px;
  }

  .note {
    height: 32px;
  }

  textarea {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-style: none;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    padding: 10px 16px;
  }

  .buttons {
    display: flex;
    gap: 32px;
    justify-content: end;

    @media (min-width: 800px) {
      grid-area: 6 / 4 / 7 / 6;
    }

    > .delete {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      height: 48px;
    }

    > .save {
      height: 48px;
    }
  }
`;

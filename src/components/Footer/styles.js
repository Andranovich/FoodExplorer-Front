import styled from "styled-components";

export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.WHITE_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 100%;
  padding: 24px 123px;

  @media (max-width: 800px) {
    padding: 30px 27px;
    height: 77px;
  }

  div {
    display: flex;
    gap: 10px;

    @media (max-width: 600px) {
      display: flex;

      gap: 6px;
    }
  }

  img {
    @media (max-width: 800px) {
      width: 22px;
      height: 18px;
    }
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_700};
    font-family: "Roboto Slab", serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (max-width: 800px) {
      font-size: 15px;
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-family: "Roboto Slab", serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.4px;

    @media (max-width: 800px) {
      font-size: 12px;
      text-align: right;
    }
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const Footering = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

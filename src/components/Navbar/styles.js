import styled from "styled-components";

export const Content = styled.div`
  .desktop {
    display: flex;
    flex-direction: row;
    padding: 24px 123px;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 32px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    @media (max-width: 1200px) {
      display: none;
    }

    > div {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
    h1 {
      gap: 10px;
      width: 156px;
      height: 28px;
      font-size: 24px;
    }

    > button {
      max-width: 216px;
      position: relative;
    }

    .ButtonSignOut {
      width: 32px;
      height: 32px;
      font-size: 32px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    .mobile-menu a {
      color: white;
      font-size: 24px;
      display: none;
    }
  }

  .mobile {
    height: 114px;
    width: 100vw;
    padding: 60px 34px 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    @media (min-width: 1200px) {
      display: none;
    }

    > div a {
      font-size: 24px;
      color: white;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
    }

    .logo {
      display: flex;
      gap: 10px;
    }
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const Navigation = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

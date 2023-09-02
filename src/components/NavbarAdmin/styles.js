import styled from "styled-components";

export const Container = styled.div`
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
      position: relative;
    }

    p {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-family: "Roboto Slab", serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 19.2px;
      position: absolute;
      top: 60px;
      left: 275px;
    }

    > button {
      max-width: 216px;
      position: relative;
      font-family: "Poppins", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
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
      justify-content: center;
      gap: 8px;
      align-items: center; 
      margin-left: auto;
      margin-right: auto;

      p {
       color: ${({ theme }) => theme.COLORS.BLUE_100};
       font-family: "Roboto Slab", serif;
       font-size: 12px;
       font-style: normal;
       font-weight: 400;
       line-height: 19.2px;
       margin-top: 5px;
     }
    }
  }
`;

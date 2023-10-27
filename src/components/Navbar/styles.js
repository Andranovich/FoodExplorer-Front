import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
  .desktop {
    display: flex;
    padding: 24px 123px;
    width: 100%;
    height: 104px;
    align-items: center;
    gap: 32px;
    flex-direction: row;
    justify-content: center;
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

    .inputNavbar {
      width: 300px;
    }

    > .buttonText {
      width: 139px;
      height: 26px;
      background: transparent;
      border: none;
      font-weight: 400;
      font-size: 16px;
      color: #c4c4cc;
    }

    > button {
      max-width: 216px;
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

    .admin {
      position: absolute;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      margin-top: 25px;
      margin-left: 150px;

      font-family: "Roboto Slab", serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
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

    .admin {
      position: absolute;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      margin-top: 8px;
      margin-left: 200px;

      font-family: "Roboto Slab", serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
    }
  }
`;

export const NewLink = styled(Link)`
  min-width: 216px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  border-radius: 5px;
  border: none;

  text-align: center;
  font-weight: 500;
  line-height: 24px;

  > .buttonText {
      width: 139px;
      height: 26px;
      background: transparent;
      border: none;
      font-weight: 400;
      font-size: 16px;
      color: #c4c4cc;
    }

    > button {
      max-width: 216px;
    }

  &:disabled {
    opacity: 0.5;
  }

  & > svg {
    font-size: 32px;
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

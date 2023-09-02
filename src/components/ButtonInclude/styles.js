import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
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
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 24px;

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    display: flex;
    width: 162px;
    height: 32px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
